import { createContext, useReducer } from "react";

export const ColumnsContext = createContext();

export const ColumnsReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLUMNS":
      return { columns: action.payload };
    case "EMPTY_COLUMNS":
      return { columns: action.payload };
    case "ADD_COLUMN":
      return {
        columns: {
          ...state.columns,
          [action.payload.id]: { id: action.payload.id, ...action.payload },
        },
      };
    case "DELETE_COLUMN":
      return {
        columns: Object.entries(state.columns)
          .map(([columnId, column]) => ({ ...column }))
          .filter((column) => column.id !== action.payload.id)
          .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    case "UPDATE_TITLE":
      return {
        columns: Object.entries(state.columns)
          .map(([columnId, column]) => ({ ...column }))
          .map((col) => (col.id == action.payload.id ? { ...col, title: action.payload.title } : col))
          .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    case "ADD_CARD":
      return {
        columns: Object.entries(state.columns)
          .map(([columnId, column]) => ({ ...column }))
          .map((col) => (col.id == action.payload.id ? { ...col, cards: [...col.cards, action.payload.card] } : col))
          .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    case "UPDATE_TITLE_CARD":
      return {
        columns: Object.entries(state.columns)
          .map(([columnId, column]) => ({ ...column }))
          .map((col) =>
            col.id == action.payload.id
              ? { ...col, cards: col.cards.map((card) => (card.id == action.payload.cardId ? { ...card, title: action.payload.title } : card)) }
              : col
          )
          .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    case "DELETE_CARD":
      return {
        columns: Object.entries(state.columns)
          .map(([columnId, column]) => ({ ...column }))
          .map((col) => (col.id == action.payload.id ? { ...col, cards: col.cards.filter((card) => card.id !== action.payload.cardId) } : col))
          .reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
      };
    default:
      return state;
  }
};

export const ColumnsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ColumnsReducer, { columns: null });

  return <ColumnsContext.Provider value={{ ...state, dispatch }}>{children}</ColumnsContext.Provider>;
};
