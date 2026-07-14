
import React, { useState, useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employeedashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    const trimmedEmail = email.trim().toLowerCase()
    const trimmedPassword = password.trim()

    if (trimmedEmail === 'admin1@gmail.com' && trimmedPassword === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const employee = userData?.find(
      (e) =>
        e.email.trim().toLowerCase() === trimmedEmail &&
        e.password.trim() === trimmedPassword
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employee })
      )
    } else {
      alert('Invalid Credentials ❌')
    }
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
