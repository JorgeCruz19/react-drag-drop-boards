import { useContext } from "react";
import { ColumnsContext } from "../context/ColumnsContext";

export const useColumnsContext = () => {
  const context = useContext(ColumnsContext);

  if (!context) {
    throw new Error(
      "useColumnsContext must be used within a ColumnsContextProvider"
    );
  }

  return context;
};
