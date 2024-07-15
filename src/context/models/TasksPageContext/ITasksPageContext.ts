import {FormEventHandler, MouseEventHandler} from 'react'
import {ITask} from '../../../entities'

export interface ITasksPageContext {
    saveTaskTemporarily: FormEventHandler<HTMLFormElement>
    createTask: FormEventHandler<HTMLFormElement>
    deleteTask: (taskId: string) => void
    updateTask: (taskId: string,  newTask: ITask) => void 
    openTaskForm: MouseEventHandler<HTMLButtonElement>
    handleTaskOptions: MouseEventHandler<HTMLElement>
}