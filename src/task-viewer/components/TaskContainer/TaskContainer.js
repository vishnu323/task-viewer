import React, { useContext, useEffect, useState } from 'react'
import TaskFiller from './TaskFiller/TaskFiller'
import TasksViewer from './TasksViewer/TasksViewer'
import TaskViewerContext from '../../context/TaskViewerContext'
import { objectSort } from '../../utils'
import { tabs } from '../../constants'
import './TaskContainer.scss'

const TaskContainer = () => {
  const { taskList } = useContext(TaskViewerContext)
  const [tabTaskList, setTabTaskList] = useState([])
  const [activeTab, setActiveTab] = useState(tabs.upcoming)
  useEffect(() => {
    dataHandler(taskList)
  }, [activeTab])
  const dataHandler = (data) => {
    if (activeTab === tabs.upcoming) {
      setTabTaskList([...objectSort(data)])
    }
    if (activeTab === tabs.all) {
      setTabTaskList([...data])
    }
  }
  return (
    <div className="task-container">
      <div className="left-container">
        <div className="task-header">Task Creator</div>
        <TaskFiller dataHandler={dataHandler} />
      </div>
      <div className="right-container">
        <TasksViewer
          tabTaskList={tabTaskList}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
    </div>
  )
}

export default TaskContainer
