import { useState } from 'react'
import { TaskContext } from '../../models'
import { ITaskContextProvider } from './ITaskContextProvider'

import { Task } from '../../../types'

function Root(props: ITaskContextProvider) {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: 0,
			title: 'Comer fubá',
			priority: 'high',
			completionDate: new Date(),
			creationDate: new Date(),
			description: 'comer um pouco de fubá',
		},
		{
			id: 1,
			title: 'Comer bolo',
			priority: 'high',
			completionDate: new Date(),
			creationDate: new Date(),
			description: 'comer uma fatia de bolo',
		},
		{
			id: 2,
			title: 'Comer acarajé',
			priority: 'high',
			completionDate: new Date('2021-10-10'),
			creationDate: new Date('2021-10-10'),
			description: 'comer um acarajé',
		},
		{
			id: 3,
			title: 'Comer pastel',
			priority: 'high',
			completionDate: new Date('2022-12-11'),
			creationDate: new Date('2022-06-11'),
			description: 'comer um pastel de queijo',
		},
	])

	const [isEditable, setIsEditable] = useState(false)

	return (
		<TaskContext.Provider
			value={{ isEditable, tasks, setIsEditable, setTasks }}
		>
			{props.children}
		</TaskContext.Provider>
	)
}

export const TaskContextProvider = {
	Root,
}
