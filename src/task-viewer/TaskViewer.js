import React, { useState } from 'react'
import TaskContainer from './components/TaskContainer/TaskContainer'
import TaskViewerContext from './context/TaskViewerContext'

const TaskViewer = () => {
  const [taskList, setTaskList] = useState([])
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
