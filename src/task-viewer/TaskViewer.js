import React, { useState } from 'react'
import TaskContainer from './components/TaskContainer/TaskContainer'
import { localStorageKey } from './constants'
import TaskViewerContext from './context/TaskViewerContext'

const TaskViewer = () => {
  const getDataFromLocalStorage = () => {
    const item = localStorage.getItem(localStorageKey)
    return item ? JSON.parse(item) : []
  }
  const [taskList, setTaskList] = useState(getDataFromLocalStorage())

  return (
    <div>
      <TaskViewerContext.Provider
        value={{
          taskList: taskList,
          setTaskList: setTaskList,
        }}
      >
        <TaskContainer />
      </TaskViewerContext.Provider>
    </div>
  )
}

export default TaskViewer
