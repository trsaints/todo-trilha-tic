import { Priority } from '../types'

export interface ITask {
	id: number
	title: string
	priority: Priority
	completionDate: Date
	creationDate: Date
	description: string
}
