import {ComponentProps} from 'react'
import {ITask} from '../../entities'

interface ITaskCard extends ComponentProps<'details'> {
	task: ITask
	isEditable: boolean
}

export type { ITaskCard }
