import React from 'react'

// const TaskListNo = ({data}) => {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
        
//         <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
//             <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
//             <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
//             <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
//             <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 '>
//             <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
//             <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
//             <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
//             <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
//         </div>
//     </div>
//   )
// }


const TaskListNo = ({ data }) => {
  const taskNumbers = data?.taskNumbers || {};

  return (
    <div className="flex gap-10 text-white">
      <div className="bg-[#27272a] p-4 rounded-xl text-center w-[150px]">
        <h3 className="text-lg font-semibold">New</h3>
        <p className="text-3xl font-bold text-emerald-400">
          {taskNumbers.newTask ?? 0}
        </p>
      </div>

      <div className="bg-[#27272a] p-4 rounded-xl text-center w-[150px]">
        <h3 className="text-lg font-semibold">Active</h3>
        <p className="text-3xl font-bold text-yellow-400">
          {taskNumbers.active ?? 0}
        </p>
      </div>

      <div className="bg-[#27272a] p-4 rounded-xl text-center w-[150px]">
        <h3 className="text-lg font-semibold">Completed</h3>
        <p className="text-3xl font-bold text-green-400">
          {taskNumbers.completed ?? 0}
        </p>
      </div>

      <div className="bg-[#27272a] p-4 rounded-xl text-center w-[150px]">
        <h3 className="text-lg font-semibold">Failed</h3>
        <p className="text-3xl font-bold text-red-400">
          {taskNumbers.failed ?? 0}
        </p>
      </div>
    </div>
  );
};

export default TaskListNo;

