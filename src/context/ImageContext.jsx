import { useReducer, useEffect } from "react";
import { ImageContext } from "./Context";
import { useAuthContext } from "../hooks/useAuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config";

const initialState = {
  uploadProgress: 0,
  imageUrl: null,
  error: null,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploadProgress: 0, imageUrl: null, error: null };
    case "UPLOAD_PROGRESS":
      return { ...state, uploadProgress: action.payload };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        imageUrl: action.payload,
        uploadProgress: 100,
        error: null,
      };
    case "UPLOAD_ERROR":
      return { ...state, error: action.payload, uploadProgress: 0 };
    case "CLEAR_IMAGE":
      return { uploadProgress: 0, imageUrl: null, error: null };
    default:
      return state;
  }
};

export function ImageContextProvider({ children }) {
  const [state, dispatch] = useReducer(imageReducer, initialState);
  const { user } = useAuthContext();

  const uploadImage = async (file) => {
    if (!file) {
      dispatch({
        type: "UPLOAD_ERROR",
        payload: "Please select a file first.",
      });
      return;
    }

    const storageRef = ref(storage, `profileImages/${user.id}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    dispatch({ type: "UPLOAD_START" });

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        dispatch({ type: "UPLOAD_PROGRESS", payload: progress });
      },
      (err) => {
        dispatch({ type: "UPLOAD_ERROR", payload: err.message });
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          dispatch({ type: "UPLOAD_SUCCESS", payload: downloadURL });
          localStorage.setItem("profilePicture", downloadURL);
        } catch (err) {
          dispatch({ type: "UPLOAD_ERROR", payload: err.message });
        }
      }
    );

    console.log("The upload function");
  };

  useEffect(() => {
    const imageUrl = localStorage.getItem("profilePicture");

    if (imageUrl) {
      dispatch({ type: "UPLOAD_SUCCESS", payload: imageUrl });
    }
  }, [user]);

  console.log("ImageContext state :", state);

  return (
    <ImageContext.Provider value={{ ...state, uploadImage, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
}
