import { v4 as uuidv4 } from 'uuid'

export default class Task {
  id: string
  isCompleted: boolean
  title: string

  constructor(title: string, status = false) {
    this.id = uuidv4()
    this.title = title
    this.isCompleted = status
  }
}
