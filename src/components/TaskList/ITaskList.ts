import {ComponentProps, MouseEventHandler} from 'react'
import {Task} from '../../entities'

export interface ITaskList extends ComponentProps<'ul'> {
    tasks: Task[]
    onHandleClick: MouseEventHandler<HTMLElement>
}
