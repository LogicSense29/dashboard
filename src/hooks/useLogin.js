import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useImageContext } from "./useImageContext";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../config";

export function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: imageDispatch } = useImageContext();
  const url = "http://localhost:4000/api/user/login";

  const login = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, credentials);

      if (response.status === 200) {
        const userData = response.data;
        console.log(userData);

        // Store user session
        localStorage.setItem("user", JSON.stringify(userData));

        const folderRef = ref(storage, `profileImages/${userData.id}`);
        const listOfImages = await listAll(folderRef);
        const image = await Promise.all(
          listOfImages.items.map((itemRef) => getDownloadURL(itemRef))
        );

        // Store profile picture
        localStorage.setItem("profilePicture", image);

        // Update auth context
        dispatch({ type: "LOGIN", payload: userData });
        imageDispatch({ type: "UPLOAD_SUCCESS", payload: image });
      } else {
        const errorData = response.data;
        console.error(errorData);

        setError(errorData ? errorData.message : "An error occurred");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
