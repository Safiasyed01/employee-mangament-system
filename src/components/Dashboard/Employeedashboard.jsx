
import React from "react";
import Header from "../others/Header";
import TaskListNo from "../others/TaskListNo";
import TaskList from "../TaskList/TaskList";

const Employeedashboard = ({data}) => {
  return (
    <div className="p-16 bg-[#1C1C1C] h-screen"> {/* Full screen + background */}
     <h1>{data.id}</h1>
      <Header   data={data}/>
      <TaskListNo data={data}/>
      <TaskList data={data}/>
    </div>
  );
};

export default Employeedashboard;
