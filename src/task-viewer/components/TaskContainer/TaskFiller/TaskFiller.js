import React, { useState, useEffect, useContext } from 'react'
import InputBox from '../../../common/InputBox/InputBox'
import { todayDate, validate } from '../../../utils'
import TaskViewerContext from '../../../context/TaskViewerContext'
import useInput from '../../../hooks/useInput'
import './TaskFiller.scss'

const TaskFiller = ({ dataHandler }) => {
  const [valid, setValid] = useState(false)
  const { taskList, setTaskList } = useContext(TaskViewerContext)

  const [taskValue, taskBind, taskReset] = useInput('')
  const [descriptionValue, descriptionBind, descriptionReset] = useInput('')
  const [dateValue, dateBind, dateReset] = useInput('')
  useEffect(() => {
    validate(taskValue, dateValue) ? setValid(true) : setValid(false)
  }, [taskValue, dateValue])

  const handler = () => {
    const dateFormat = new Date(dateValue)
    const taskObj = {
      name: taskValue,
      description: descriptionValue,
      dateInMillis: dateFormat.getTime(),
    }
    const data = [...taskList, taskObj]
    setTaskList(data)

    //resetting the values
    taskReset()
    if (descriptionValue) {
      descriptionReset()
    }
    dateReset()
    dataHandler(data)
  }
  return (
    <div className="task-filler-container">
      <div className="task-filler">
        <div className="task-name">
          <InputBox header="Task Name" bind={taskBind} />
        </div>
        <div className="task-description">
          <InputBox header="Task Descripion(optional)" bind={descriptionBind} />
        </div>
        <div className="date-time">
          <InputBox
            header="Select Data and Time"
            inputType="datetime-local"
            bind={dateBind}
            minFunc={todayDate}
          />
        </div>
        <div className="create-task">
          <div
            className={`create-task-btn ${!valid && 'disable'}`}
            onClick={handler}
          >
            Create Task
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskFiller
