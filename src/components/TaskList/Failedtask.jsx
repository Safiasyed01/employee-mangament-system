import React from 'react'

const Failedtask = ({data}) => {
  return (


  <div className='flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl py-4 px-3 text-white'>
            <div className=' flex justify-between items-center '>
         <h3 className='bg-red-600 text-sm  px-3 py-1 rounded '>{data.category}</h3>
         <h4 className='text-base'>{data.taskDate}</h4>
        </div>
        <div>
                   <h2 className='mt-5 text-xxl font-semibold'>{data.taskTitle}</h2>
                   <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos quas sequi possimus quidem earum.</p>


        </div>
        
</div>)
}

export default Failedtask