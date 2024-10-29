import { useReducer, useEffect } from "react";
import { ProductivityContext } from "./Context";

function productivityReducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCTIVITY":
      return { productivity: action.payload };
    case "ADD_PRODUCTIVITY":
      return { productivity: [...state.task, action.payload] };
    case "UPDATE_PRODUCTIVITY":
      return {
        productivity: state.task.map((t) =>
          t.task_id === action.payload.task_id ? action.payload : t
        ),
      };
    case "DELETE_PRODUCTIVITY":
      return {
        productivity: state.info.filter(
          (t) => t.task_id !== action.payload.task_id
        ),
      };
    case "CLEAR_PRODUCTIVITY":
      return { productivity: null };
    default:
      return state;
  }
}

export function ProductivityContextProvider({ children }) {
  const [state, dispatch] = useReducer(productivityReducer, {
    productivity: null,
  });

  useEffect(() => {
    const productivity = JSON.parse(localStorage.getItem("productivity"));

    if (productivity) {
      dispatch({ type: "GET_PRODUCTIVITY", payload: productivity });
      console.log("FROM THE ROOT productivity");
    }
  }, []);

  console.log("ProductivityContext state :", state);

  return (
    <ProductivityContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductivityContext.Provider>
  );
}
