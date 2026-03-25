import React from 'react'

const CompltTask = ({data}) => {
  return (
    <div>
        
  <div className='shrink-0 h-full w-75 bg-green-300 rounded-xl py-4 px-3 '>
            <div className=' flex justify-between items-center '>
         <h3 className='bg-red-600 text-sm  px-3 py-1 rounded '>{data.category}</h3>
         <h4 className='text-base'>{data.taskDate}</h4>
        </div>
        <div>
                   <h2 className='mt-5 text-xxl font-semibold'>{data.taskTitle}</h2>
                   <p className='text-sm mt-2'>{data.taskDescription}</p>

  
  <div className='mt-2'>
    <button className='w-full'> Complete</button>
  </div>
        </div>
        
</div>

    </div>
  )
}

export default CompltTask