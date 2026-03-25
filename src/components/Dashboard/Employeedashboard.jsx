
// import React from "react";
// import Header from "../others/Header";
// import TaskListNo from "../others/TaskListNo";
// import TaskList from "../TaskList/TaskList";

// const Employeedashboard = ({props}) => {
//   return (
//     <div className="p-16 bg-[#1C1C1C] h-screen"> {/* Full screen + background */}
//      {/* <h1>{data.id}</h1> */}
//       <Header changeUser={props.changeUser} data={props.data}/>
//       <TaskListNo data={props.data}/>
//       <TaskList data={props.data}/>
//     </div>
//   );
// };

// export default Employeedashboard;
import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNo data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard