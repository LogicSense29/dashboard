import { useContext } from "react";
import { EmployeeTaskContext } from "../context/Context";

export function useEmployeeTaskContext() {
  const context = useContext(EmployeeTaskContext);

  if (!context) {
    throw Error("Cant use this context out of it provider");
  }

  return context;
}
