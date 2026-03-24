import React from 'react'

const Accepttask = ({data}) => {
    console.log()
  return (
 <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl py-4 px-3 text-white'>
            <div className=' flex justify-between items-center '>
         <h3 className='bg-red-600 text-sm  px-3 py-1 rounded '>{data.category}</h3>
         <h4 className='text-base'>{data.taskDate}</h4>
        </div>
        <div>
                   <h2 className='mt-5 text-xxl font-semibold'>{data.taskTitle}</h2>
                   <p className='text-sm mt-2'>{data.taskDescription}</p>

        <div className='felx justify-between mt-4'>
            <button  className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button  className='bg-green-500 py-1 px-2 text-sm '>Mark as Failed</button>

        </div>
        </div>
        
</div>  )
}

export default Accepttask