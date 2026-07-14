import React from 'react'
import AcceptTask from './Accepttask'
import NewTask from './NewTask'
import CompltTask from './CompltTask'
import FailedTask from './Failedtask'

const TaskList = ({ data, onUpdateStatus }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onComplete={() => onUpdateStatus(idx, 'completed')}
              onFail={() => onUpdateStatus(idx, 'failed')}
            />
          )
        }

        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              onAccept={() => onUpdateStatus(idx, 'active')}
            />
          )
        }

        if (elem.completed) {
          return <CompltTask key={idx} data={elem} />
        }

        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }

        return null
      })}
    </div>
  )
}

export default TaskList