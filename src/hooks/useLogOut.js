import { useAuthContext } from "./useAuthContext";
import { useImageContext } from "./useImageContext";
import { useEmployeeTaskContext } from "./useEmployeeTaskContext";

export function useLogout() {
  const { dispatch } = useAuthContext();
  const { dispatch: imageDispatch } = useImageContext();
  const { dispatch: taskDispatch } = useEmployeeTaskContext();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("profilePicture");
    localStorage.removeItem("task");

    dispatch({ type: "LOGOUT" });
    imageDispatch({ type: "CLEAR_IMAGE" });
    taskDispatch({ type: "CLEAR_TASK" });
  };

  return { logout };
}
