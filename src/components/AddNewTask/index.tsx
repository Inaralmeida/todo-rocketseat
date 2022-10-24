import S from './style.module.css'

import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react'

interface IAddNewTask {
  inputValue: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
  addTask: (e: FormEvent) => void
}

const AddNewTask = ({ onChange, inputValue, addTask }: IAddNewTask) => {
  return (
    <section className={S.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={addTask}>
        Criar
        <PlusCircle size={16} />
      </button>
    </section>
  )
}

export default AddNewTask
