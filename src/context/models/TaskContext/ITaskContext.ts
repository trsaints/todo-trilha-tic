import { Task } from '../../../types'

export interface ITaskContext {
	tasks: Task[]
	setTasks: (tasks: Task[]) => void
}
