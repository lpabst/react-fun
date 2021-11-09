import React, { createContext, useReducer } from "react";

const initialState = {
  showLogin: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EDIT_SHOW_LOGIN": {
      return {
        ...state,
        showLogin: action.value,
      };
    }

    case "EDIT_USER": {
      return {
        ...state,
        user: action.value,
      };
    }

    default:
      return state;
  }
};

export const context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};
