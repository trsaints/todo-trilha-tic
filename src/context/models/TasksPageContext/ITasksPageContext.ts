import {MouseEventHandler} from 'react'

export interface ITasksPageContext {
    openTaskForm: MouseEventHandler<HTMLElement>
    handleTaskOptions: MouseEventHandler<HTMLElement>
}