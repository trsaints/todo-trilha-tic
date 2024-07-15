import {ComponentProps, MouseEventHandler} from 'react'
import {ITask} from '../../entities'

export interface ITaskList extends ComponentProps<'ul'> {
	tasks: ITask[]
	onHandleClick: MouseEventHandler<HTMLElement>
}
