import React from 'react'

const CreateTask = () => {
  return (
    <div>
          <div className='text-black mt-7'>
        <form className=' flex flex-wrap w-full bg-[#1c1c1c] p-6  items-start justify-between '>
          <div className='w-1/2'>
                       <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input
            type="text"
            placeholder="Make a UI design"
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] '
          />
</div>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input type="date" placeholder='' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px]  ' />
          </div>

          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input type="text" placeholder='employee name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px]' />
          </div>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input type="text" placeholder='design , dev etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px]' />
          </div>
          
          </div>
 
<div  className='w-1/2 text-lg text-white'>
          <h3>Description</h3>
          <textarea
            cols={30}
            rows={5}
            className='border-[1px] border-gray-400 mt-4 p-2 mr-3 w-full  rounded outline-none bg-transparent px-7'
          >
        
          </textarea>
                          <button className='text-white bg-emerald-500 px-4 py-3 hover:bg-emerald-600 rounded text-sm ml- mt-4 w-full'> Create Task</button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTask