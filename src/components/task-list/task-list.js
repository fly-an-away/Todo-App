import React from 'react'

import Task from '../task'
import ChangeTaskDescription from '../change-task-description'

import './task-list.css'

function TaskList({
  tasksData,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  onEditClick,
  description,
  onChangeDescription,
}) {
  const taskElements = tasksData.map((taskElement) => {
    const { id, isChange, minValue, secValue, ...taskElementProps } = taskElement

    return (
      <li key={id} className="todo-list">
        <Task
          {...taskElementProps}
          minValue={minValue}
          secValue={secValue}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onEditClick={() => onEditClick(id)}
          onChangeDescription={() => onChangeDescription(id, description)}
        />
        {isChange ? (
          <ChangeTaskDescription id={id} description={description} onChangeDescription={onChangeDescription} />
        ) : null}
      </li>
    )
  })

  return <ul className="todo-list">{taskElements}</ul>
}

export default TaskList
