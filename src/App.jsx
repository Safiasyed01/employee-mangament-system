// // import React, { useContext, useEffect, useState } from 'react'
// // import Login from './components/Auth/Login'
// // import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// // import AdminDashboard from './components/Dashboard/AdminDashboard'
// // import { AuthContext } from './context/AuthProvider'

// // const App = () => {

// //   const [user, setUser] = useState(null)
// //   const [loggedInUserData, setLoggedInUserData] = useState(null)
// //   const {userData,setUserData} = useContext(AuthContext)

// //   useEffect(()=>{
// //     const loggedInUser = localStorage.getItem('loggedInUser')
    
// //     if(loggedInUser){
// //       const userData = JSON.parse(loggedInUser)
// //       setUser(userData.role)
// //       setLoggedInUserData(userData.data)
// //     }

// //   },[])


// //   const handleLogin = (email, password) => {
// //     if (email == 'admin@me.com' && password == '123') {
// //       setUser('admin')
// //       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
// //     } else if (userData) {
// //       const employee = userData.find((e) => email == e.email && e.password == password)
// //       if (employee) {
// //         setUser('employee')
// //         setLoggedInUserData(employee)
// //         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
// //       }
// //     }
// //     else {
// //       alert("Invalid Credentials")
// //     }
// //   }



// //   return (
// //     <>
// //       {!user ? <Login handleLogin={handleLogin} /> : ''}
// //       {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
// //     </>
// //   )
// // }

// // export default App
// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const { userData } = useContext(AuthContext); // ✅ fixed destructuring

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");

//     if (loggedInUser) {
//       const parsed = JSON.parse(loggedInUser);
//       setUser(parsed.role);
//       setLoggedInUserData(parsed.data || null);
//     }
//   }, []);

//   const handleLogin = (email, password) => {
//     if (email === "admin@me.com" && password === "123") {
//       setUser("admin");
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else if (userData && userData.length > 0) {
//       const employee = userData.find(
//         (e) => e.email === email && e.password === password
//       );
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee", data: employee })
//         );
//       } else {
//         alert("Invalid Credentials");
//       }
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard changeUser={setUser} />
//       ) : user === "employee" ? (
//         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
//       ) : null}
//     </>
//   );
// };

// export default App;
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    // ✅ Check Admin
    const adminList = JSON.parse(localStorage.getItem("admin"));
    const admin = adminList?.find(
      (a) => a.email === email && a.password === password
    );

    if (admin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // ✅ Check Employees
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    // ❌ No match
    alert("Invalid Credentials");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
