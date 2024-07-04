import { Priority } from './Priority'

export type Task = {
	id: number
	title: string
	priority: Priority
	completionDate: Date
	creationDate: Date
	description: string
}
