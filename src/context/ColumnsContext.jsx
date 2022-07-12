import { createContext, useReducer } from "react";

export const ColumnsContext = createContext();

export const ColumnsReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLUMNS":
      return { columns: action.payload };
    case "ADD_COLUMN":
      return { columns: [action.payload, ...state.columns] };
    default:
      return state;
  }
};

export const ColumnsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ColumnsReducer, { columns: null });

  return (
    <ColumnsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ColumnsContext.Provider>
  );
};
