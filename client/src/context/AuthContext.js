import React, { createContext, useMemo, useReducer, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  user: {},
  token: "",
  signUpErrors: {},
  signInErrors: {},
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_AUTHENTICATED":
      return {
        ...state,
        user: action.payload.decoded,
        token: action.payload.parsed,
        signInErrors: {}
      };
    case "USER_REGISTERED":
      return {
        ...state,
        signUpErrors: {}
      };
    case "SIGN_UP_ERRORS":
      return {
        ...state,
        signUpErrors: action.payload
      };
    case "SIGN_IN_ERRORS":
      return {
        ...state,
        signInErrors: action.payload
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "STORE_DATA":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export function AuthProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [entrysData, setEntrysData] = useState([]);

  const value = useMemo(() => {
    return {
      entrysData,
      setEntrysData,
      store,
      dispatch
    };
  }, [store, entrysData]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
