import React, { createContext } from "react";

export const ContextGlobal = createContext({});

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const initialState = {
    theme: "light",
    data: []
  }

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
