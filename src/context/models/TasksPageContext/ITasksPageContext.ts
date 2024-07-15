import {FormEventHandler, MouseEventHandler} from 'react'

export interface ITasksPageContext {
    saveNewTaskTemporarily: FormEventHandler<HTMLFormElement>
    createTask: FormEventHandler<HTMLFormElement>
    deleteTask: (taskId: string) => void
    updateTask: FormEventHandler<HTMLFormElement>
    openTaskForm: MouseEventHandler<HTMLButtonElement>
    handleTaskOptions: MouseEventHandler<HTMLElement>
}