// import React from 'react'
// import Accepttask from './Accepttask'
// import Failedtask from './Failedtask'
// import NewTask from './NewTask'
// import CompltTask from './CompltTask'
// const TaskList = ({data}) => {
//   return (
//     <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5  mt-10'>
//        <Accepttask/>
//         <NewTask/>
//         <Failedtask/>
//         <CompltTask/>

      



//         </div>
        



//   )
// }

// export default TaskList

import React from 'react'
import Accepttask from './Accepttask'
import Failedtask from './Failedtask'
import NewTask from './NewTask'
import CompltTask from './CompltTask'

const TaskList = ({ data }) => {
  return (
    <div
      id='tasklist'
      className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'
    >
      {data.tasks.map((elem , idx)=>{
        if(elem.active){
          return <Accepttask key={idx} data={elem}/>
        }
        if(elem.active){
          return<NewTask key={idx} data={elem}/>
        }
        if (elem.active){
          return <CompltTask key={idx} data={elem}/>
        }
        if (elem.active){
          return<Failedtask key={idx} data={elem}elem/>  
        }
      }
      )}
      {/* <Accepttask />
      <NewTask />
      <Failedtask />
      <CompltTask /> */}
    </div>
  )
}

export default TaskList
