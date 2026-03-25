import React from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'

const Employeedashboard = ({ changeUser, data }) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={changeUser} data={data} />
        <TaskListNo data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default Employeedashboard

