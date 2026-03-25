// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import Employeedashboard from './components/Dashboard/Employeedashboard'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState(null)
//   const [userData,SetUserData] = useContext(AuthContext)

//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
    
//     if(loggedInUser){
//       const userData = JSON.parse(loggedInUser)
//       setUser(userData.role)
//       setLoggedInUserData(userData.data)
//     }

//   },[])


//   // const handleLogin = (email, password) => {
//   //   if (email == 'admin@me.com' && password == '123') {
//   //     setUser('admin')
//   //     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//   //   } else if (userData) {
//   //     const employee = userData.find((e) => email == e.email && e.password == password)
//   //     if (employee) {
//   //       setUser('employee')
//   //       setLoggedInUserData(employee)
//   //       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
//   //     }
//   //   }
//   //   else {
//   //     alert("Invalid Credentials")
//   //   }
//   // }

// const handleLogin = (email, password) => {

//   if (email === 'admin@example.com' && password === '123') {
//     setUser('admin')
//     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
//     return
//   }

//   const employee = userData.find(
//     (e) => email === e.email && password === e.password
//   )
  

//   if (employee) {
//     setUser('employee')
//     setLoggedInUserData(employee)
//     localStorage.setItem(
//       'loggedInUser',
//       JSON.stringify({ role: 'employee', data: employee })
//     )
//   } else {
//     alert("Invalid Credentials ❌")
//   }
// }


//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data={loggedInUserData} /> : null) }
//     </>
//   )
// }

// export default App
import React, { useState, useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
localStorage.removeItem('loggedInUser')

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

    if (trimmedEmail === 'admin@example.com' && trimmedPassword === '123') {
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
