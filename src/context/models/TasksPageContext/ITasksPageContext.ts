import {MouseEventHandler} from 'react'

export interface ITasksPageContext {
    openTaskForm: MouseEventHandler<HTMLButtonElement>
    handleTaskOptions: MouseEventHandler<HTMLElement>
}