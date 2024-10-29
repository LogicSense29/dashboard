import { useReducer, useEffect } from "react";
import { LeaveContext } from "./Context";

function leaveReducer(state, action) {
  switch (action.type) {
    case "GET_LEAVE":
      return { leave: action.payload };
    case "ADD_LEAVE":
      return { leave: [...state.task, action.payload] };
    case "UPDATE_LEAVE":
      return {
        leave: state.task.map((t) =>
          t.task_id === action.payload.task_id ? action.payload : t
        ),
      };
    case "DELETE_LEAVE":
      return {
        leave: state.info.filter((t) => t.task_id !== action.payload.task_id),
      };
    case "CLEAR_LEAVE":
      return { leave: null };
    default:
      return state;
  }
}

export function LeaveContextProvider({ children }) {
  const [state, dispatch] = useReducer(leaveReducer, {
    leave: null,
  });

  useEffect(() => {
    const task = JSON.parse(localStorage.getItem("leave"));
    // localStorage.removeItem("task");

    if (task) {
      dispatch({ type: "GET_LEAVE", payload: task });
      console.log("FROM THE ROOT");
    }
  }, []);

  console.log("LeaveContext state :", state);

  return (
    <LeaveContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LeaveContext.Provider>
  );
}
