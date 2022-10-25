import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import S from './home.module.css'
import '../styles/global.css'

import AddNewTask from '../components/AddNewTask'
import HeaderList from '../components/HeaderList'
import NoTaskMessage from '../components/NoTaskMessage'
import TaskList from '../components/TasksList'
import Task from '../core/Task'
import Header from '../components/Header'
import ModalDelete from '../components/ModalDelete'

import { ITaskProps } from '../types'

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [taskToBeDeleted, setTaskToBeDeleted] = useState<ITaskProps>()
  const [textNewTask, setTextNewTask] = useState('')
  const [tasks, setTasks] = useState<ITaskProps[]>([])
  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter((task) => task.isCompleted).length
  )

  function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
    setTextNewTask(e.target.value)
  }

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault()
    setTasks((prev) => [...prev, new Task(textNewTask)])
    setTextNewTask('')
  }

  function handleCompletedTask(taskSelected: ITaskProps) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskSelected.id) {
          return taskSelected
        }
        return task
      })
    )
  }

  function handleDeleteTask(task: ITaskProps) {
    setTaskToBeDeleted(task)
    setModalOpen(true)
  }

  function onCloseModal() {
    setModalOpen(false)
  }

  function onDeleteTask() {
    setTasks((prev) => prev.filter((task) => task.id !== taskToBeDeleted!.id))
  }

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.isCompleted).length)
  }, [tasks])

  const totalTasks = tasks.length
  const hasTasks = totalTasks > 0

  return (
    <>
      <Header />
      <main className={S.content}>
        <AddNewTask
          onChange={handleChangeTask}
          inputValue={textNewTask}
          addTask={handleAddNewTask}
        />
        <section className={S.list}>
          <HeaderList totalTasks={totalTasks} completedTasks={completedTasks} />

          <section className={S.contentList}>
            {hasTasks ? (
              <TaskList
                tasks={tasks}
                handleCompletedTask={handleCompletedTask}
                onDelete={handleDeleteTask}
              />
            ) : (
              <NoTaskMessage />
            )}
          </section>
        </section>
      </main>

      {modalOpen && <ModalDelete onClose={onCloseModal} onDelete={onDeleteTask} />}
    </>
  )
}
