import {FormEventHandler} from 'react'

export interface ITasksPageContext {
    saveTaskTemporarily: FormEventHandler<HTMLFormElement>
    createTask: FormEventHandler<HTMLFormElement>
}