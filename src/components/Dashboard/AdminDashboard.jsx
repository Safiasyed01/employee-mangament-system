// import React from 'react'
// import Header from '../others/Header'
// import CreateTask from '../others/CreateTask'
// import AllTask from '../others/AllTask'
// const AdminDashboard = (props) => {
//   return (
//     <div className='h-screen w-full p-10 bg-black'>
//       <Header changeUser={props.changeUser} />
//       <CreateTask/>
//      <AllTask/>
//     </div>
//   )
// }



// export default AdminDashboard
// import Header from "../others/Header";
// import CreateTask from "../others/CreateTask";
// import AllTask from "../others/AllTask";

// const AdminDashboard = ({ changeUser }) => {
//   return (
//     <div className="h-screen w-full p-7">
//       <Header changeUser={changeUser} />
//       <CreateTask />
//       <AllTask />
//     </div>
//   );
// };

// export default AdminDashboard;
import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="h-screen w-full p-7 bg-[#1C1C1C] text-white">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
