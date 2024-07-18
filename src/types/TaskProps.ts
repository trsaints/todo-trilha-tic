import { Priority } from './index.ts'

export type TaskProps = {
	id: number
	title: string
	priority: Priority
	completionDate: string
	creationDate: string
	description: string
}
