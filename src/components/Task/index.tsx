import S from './style.module.css'
import RadioButton from '../RadioButton'

import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ITasksComponentProps } from '../../types'

const Task = ({ task, handleCompletedTask, onDelete }: ITasksComponentProps) => {
  const { isCompleted, title } = task
  const [completed, setCompleted] = useState(isCompleted)

  function handleDeleteTask() {
    onDelete(task)
  }

  useEffect(() => {
    handleCompletedTask({ ...task, isCompleted: completed })
  }, [completed])
  return (
    <li className={S.content}>
      <RadioButton completed={completed} setCompleted={setCompleted} />

      <p className={!completed ? S.active : S.completed}>{title}</p>

      <button onClick={handleDeleteTask}>
        <Trash fontSize={20} />
      </button>
    </li>
  )
}

export default Task
