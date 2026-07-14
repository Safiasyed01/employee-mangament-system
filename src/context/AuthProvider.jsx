import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)
useEffect(() => {
    const {employees} = getLocalStorage()
    if (!employees) {
        setLocalStorage()
        const fresh = getLocalStorage()
        setUserData(fresh.employees)
    } else {
        setUserData(employees)
    }
}, [])
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider