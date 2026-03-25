// import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify([]));
  }
};

const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  return { employees };
};

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  const changeUser = (newUser) => {
    setUserData(newUser);
  };

  return (
    <AuthContext.Provider value={{ userData, changeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
