import { useContext } from "react";
import { ImageContext } from "../context/Context";

export function useImageContext() {
  const context = useContext(ImageContext);

  if (!context) {
    throw Error("Cant use this context out of it provider");
  }

  return context;
}
