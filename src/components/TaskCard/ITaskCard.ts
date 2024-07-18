import {ComponentProps} from 'react'
import {Task} from '../../entities'

interface ITaskCard extends ComponentProps<'details'> {
	task: Task
	isEditable: boolean
}

export type { ITaskCard }
