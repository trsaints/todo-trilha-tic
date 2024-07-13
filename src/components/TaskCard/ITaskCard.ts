import { Task } from '../../types'
import {ComponentProps} from 'react'

interface ITaskCard extends ComponentProps<'details'> {
	task: Task
	isEditable: boolean
}

export type { ITaskCard }
