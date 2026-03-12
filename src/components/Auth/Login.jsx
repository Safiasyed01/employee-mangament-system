

import React, { useState } from 'react'

const Login = () => {
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("email is" ,email)
    console.log("password is", password)
    setEmail("")
    setPassword("")
  }
  return (

    <div className=" flex h-screen w-screen  items-center justify-center ">
      <div className='border-2 rounded-xl p-10 rounded-1xl  border-emerald-800  '>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }

        }
         className='flex flex-col items-center justify-center'>
          <input
          value={email}
          onChange={(e)=>
           setEmail(e.target.value)
          } required type="email" placeholder='Enter your email' className='text-black outline-none bg-transparent border-2 border-emerald-800 text-xl py-3 px-7 rounded-full placeholder:text-gray-400 ' />
          <input
          value={password}
          onChange={(e)=>
           setPassword(e.target.value)
          }
          required type="password" placeholder='Enter your password ' className='text-black outline-none bg-transparent border-2 border-emerald-800 text-xl py-3 px-7 rounded-full mt-3 placeholder:text-gray-400'  />
          <button  className= 'mt-5 bg-emerald-800   border-emerald-800 border-2 bg text-xl py-3 px-24 rounded-full  placeholder:text-amber-50'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login
