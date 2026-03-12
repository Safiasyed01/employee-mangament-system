import React from 'react'
import Header from '../others/Header'
const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10 bg-black'>
      <Header />

      <div className='text-white mt-10'>
        <form className=' flex items-start justify-between'>
  <div>
          <h3 className='text-lg'>Task</h3>
          <input
            type="text"
            placeholder="Make a UI design"
            className='border border-gray-400 bg-white p-2 rounded'
          />
</div>
<div>
          <h3 className='text-lg'>Description</h3>
          <textarea
            cols={30}
            rows={5}
            className='border border-gray-400 bg-white p-2 rounded'
          ></textarea>
          </div>
          <div>
          <h3>Date</h3>
          <input type="date" placeholder='' className='bg-white' />
          </div>

          <div>
          <h3>Assign to</h3>
          <input type="text" placeholder='employee name' className='bg-white' />
          </div>
          <div>
          <h3>Category</h3>
          <input type="text" placeholder='design , dev etc' className='bg-white' />
          </div>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  )
}



export default AdminDashboard