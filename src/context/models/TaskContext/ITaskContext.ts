import { Task } from '../../../Types/Task'

export interface ITaskContext {
	tasks: Task[]
	setTasks: (tasks: Task[]) => void
}
