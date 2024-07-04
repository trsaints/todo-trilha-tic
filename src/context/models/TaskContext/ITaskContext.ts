import { Task } from '../../../types'

export interface ITaskContext {
	isEditable: boolean
	tasks: Task[]
	setTasks: (tasks: Task[]) => void
	setIsEditable: (isEditable: boolean) => void
}
