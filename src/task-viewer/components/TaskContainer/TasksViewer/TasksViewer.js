import React from 'react'
import Card from '../../../common/InputBox/Card/Card'
import { tabs } from '../../../constants'
import './TasksViewer.scss'
const TasksViewer = ({ tabTaskList, setActiveTab, activeTab }) => {
  const renderTabs = () => {
    return Object.entries(tabs).map(([key, value]) => {
      return (
        <div
          className={`tab ${value === activeTab && 'active'}`}
          key={key}
          onClick={() => setActiveTab(value)}
        >
          {value}
        </div>
      )
    })
  }

  return (
    <div className="task-viewer-container">
      <div className="tabs-holder">{renderTabs()}</div>
      <div className="cards-container">
        {(tabTaskList || []).map((cardInfo, index) => {
          return (
            <div key={index}>
              <Card {...cardInfo} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TasksViewer
