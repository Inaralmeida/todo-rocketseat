import { ITasksListProps } from '../../types'
import Task from '../Task'

const TaskList = ({ tasks, handleCompletedTask, onDelete }: ITasksListProps) => {
  return (
    <ul>
      {!!tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleCompletedTask={handleCompletedTask}
            onDelete={onDelete}
          />
        ))}
    </ul>
  )
}

export default TaskList
