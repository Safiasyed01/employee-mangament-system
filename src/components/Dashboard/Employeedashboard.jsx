
import React from "react";
import Header from "../others/Header";
import TaskListNo from "../others/TaskListNo";
import TaskList from "../TaskList/TaskList";

const Employeedashboard = () => {
  return (
    <div className="p-16 bg-[#1C1C1C] h-screen"> {/* Full screen + background */}

      <Header />
      <TaskListNo/>
      <TaskList/>
    </div>
  );
};

export default Employeedashboard;
