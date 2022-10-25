export type ITaskProps = {
  id: string
  isCompleted: boolean
  title: string
}
type CompletedTask = (task: ITaskProps) => void
type onDelete = (task: ITaskProps) => void

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

export interface ModalDeleteProps {
  onDelete: () => void;
  onClose: () => void;
}