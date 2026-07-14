import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNo from '../others/TaskListNo'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const Employeedashboard = ({ changeUser, data }) => {

  const [userData, setUserData] = useContext(AuthContext)

  const currentEmployee = userData.find(emp => emp.id === data.id)

  const updateTaskStatus = (taskIdx, newStatus) => {
    const updatedUserData = userData.map(emp => {
      if (emp.id !== data.id) return emp

      const updatedTasks = emp.tasks.map((task, idx) => {
        if (idx !== taskIdx) return task
        return {
          ...task,
          newTask: newStatus === 'newTask',
          active: newStatus === 'active',
          completed: newStatus === 'completed',
          failed: newStatus === 'failed'
        }
      })

      // recalculate counts from scratch based on updated tasks
      const taskCounts = {
        newTask: updatedTasks.filter(t => t.newTask).length,
        active: updatedTasks.filter(t => t.active).length,
        completed: updatedTasks.filter(t => t.completed).length,
        failed: updatedTasks.filter(t => t.failed).length
      }

      return { ...emp, tasks: updatedTasks, taskCounts }
    })

    setUserData(updatedUserData)
  }

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={changeUser} data={currentEmployee} />
        <TaskListNo data={currentEmployee} />
        <TaskList data={currentEmployee} onUpdateStatus={updateTaskStatus} />
    </div>
  )
}

export default Employeedashboard