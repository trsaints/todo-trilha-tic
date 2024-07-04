import { createContext } from 'react'
import { ITaskContext } from './ITaskContext'

const TaskContext = createContext<ITaskContext>({
	tasks: [],
	setTasks: () => {},
})

export { TaskContext }
