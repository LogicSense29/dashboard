import { useReducer, useEffect } from "react";
import { EmployeeTaskContext } from "./Context";

function taskReducer(state, action) {
  switch (action.type) {
    case "GET_TASK":
      return { task: action.payload };
    case "CREATE_TASK":
      return { task: [...state.task, action.payload] };
    case "UPDATE_TASK":
      return {
        task: state.task.map((t) =>
          t.task_id === action.payload.task_id ? action.payload : t
        ),
      };
    case "DELETE_TASK":
      return {
        task: state.task.filter((t) => t.task_id !== action.payload.task_id),
      };
    case "CLEAR_TASK":
      return { task: null };
    default:
      return state;
  }
}

export function EmployeeTaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    task: [],
  });

  useEffect(() => {
    const task = JSON.parse(localStorage.getItem("task"));

    if (task) {
      dispatch({ type: "GET_TASK", payload: task });
      console.log("FROM THE ROOT");
    }
  }, []);

  console.log("EmployeeTaskContext state :", state);

  return (
    <EmployeeTaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EmployeeTaskContext.Provider>
  );
}
