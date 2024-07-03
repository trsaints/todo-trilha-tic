import { createContext } from 'react'
import { ITaskContext } from './interface/ITaskContext'

const TaskContext = createContext<ITaskContext>({
	tasks: [],
    setTasks: () => {},
})

export { TaskContext }
