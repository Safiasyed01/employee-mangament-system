import React, { createContext, useState, useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/Localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage();            // seed data once
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  const changeUser = (newUser) => setUserData(newUser);

  return (
    <AuthContext.Provider value={{ userData, changeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
