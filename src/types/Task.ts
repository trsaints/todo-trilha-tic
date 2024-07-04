export type Priority = 'low' | 'medium' | 'high'

export type Task = {
	id: number
	title: string
	priority: Priority
	completionDate: Date
	creationDate: Date
	description: string
}
