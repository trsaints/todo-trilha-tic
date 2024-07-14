import {FormEventHandler, MouseEventHandler} from 'react'

export interface ITasksPageContext {
    saveTaskTemporarily: FormEventHandler<HTMLFormElement>
    createTask: FormEventHandler<HTMLFormElement>
    openTaskForm: MouseEventHandler<HTMLButtonElement>
}