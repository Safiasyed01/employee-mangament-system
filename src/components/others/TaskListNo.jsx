// import React from 'react'

// const TaskListNo = () => {
//   return (
//     <div className='flex mt-10 justify-between gap-5  screen'>
//         <div className='h-40 w[45%] bg-red-400'>
//             <h2  className=' text-3xl  font-semibold'>0</h2>
//             <h3  className='text-xl f '>New Task</h3>
//             </div>  </div>
//   )
// }

// export default TaskListNo
import React from 'react'

const TaskListNo = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full text-white'>
      
      <div className='  w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl'>New Task</h3>
      </div>
            <div className='  w-[45%] bg-blue-300 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl'>New Task</h3>
      </div>

      <div className='  w-[45%] bg-green-300 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl'>New Task</h3>
      </div>

      <div className='  w-[45%] bg-yellow-300 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl'>New Task</h3>
      </div>


    </div>
  )
}

export default TaskListNo
