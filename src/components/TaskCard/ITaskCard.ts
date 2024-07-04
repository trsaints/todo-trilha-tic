import { Task } from '../../types'

interface ITaskCard extends React.ComponentProps<'details'> {
	task: Task
	isEditable: boolean
}

export type { ITaskCard }
