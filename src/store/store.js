import React, { createContext, useReducer } from "react";

const initialState = {
  modalToShow: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGIN_MODAL": {
      return {
        ...state,
        modalToShow: "login",
      };
    }

    case "OPEN_REGISTER_MODAL": {
      return {
        ...state,
        modalToShow: "register",
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        modalToShow: null,
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
