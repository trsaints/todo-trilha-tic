import { createContext } from 'react'
import { ITaskContext } from './ITaskContext'

const TaskContext = createContext<ITaskContext>({
	tasks: [],
	task: {
		id: 0,
		title: '',
		priority: 'high',
		completionDate: new Date(),
		creationDate: new Date(),
		description: '',
	},
	isEditable: false,
	createTask: () => {},
	setTask: () => {},
	setTasks: () => {},
	setIsEditable: () => {},
})

export { TaskContext }
