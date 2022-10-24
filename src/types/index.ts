export type ITaskProps = {
  id: string
  isCompleted: boolean
  title: string
}
type CompletedTask = (task: ITaskProps) => void
type onDelete = (id: string) => void

export interface ITasksComponentProps {
  task: ITaskProps
  handleCompletedTask: CompletedTask
  onDelete: onDelete
}

export interface ITasksListProps {
  tasks: ITaskProps[]
  handleCompletedTask: CompletedTask
  onDelete: onDelete
}

