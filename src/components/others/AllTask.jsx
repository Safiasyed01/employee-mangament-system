// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const AllTask = () => {

//    const [userData,setUserData] =  useContext(AuthContext)

   
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//             <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//             <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//             <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//             <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         </div>
//         <div className=''>
//         {userData.map(function(elem,idx){
//             return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
//             <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
//             <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
//         </div>
//         })}
//         </div>
        
        
//     </div>
//   )
// }

// export default AllTask
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider"; // ✅ correct import

const AllTask = () => {
  const { userData } = useContext(AuthContext); // ✅ correct usage

  return (
    <div className="bg-[#1C1C1C] text-white p-6 rounded-xl mt-6">
      <h2 className="text-2xl mb-4 font-bold text-emerald-400">
        All Tasks
      </h2>

      {!userData || userData.length === 0 ? (
        <p className="text-gray-400">No employees or tasks available.</p>
      ) : (
        <div className="space-y-4">
          {userData.map((employee) => (
            <div
              key={employee.id}
              className="bg-[#27272a] p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2 text-emerald-300">
                {employee.firstName}
              </h3>
              <ul className="ml-4 list-disc">
                {employee.tasks?.map((task, index) => (
                  <li key={index} className="text-gray-300">
                    <b>{task.taskTitle}</b> — {task.category}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTask;
