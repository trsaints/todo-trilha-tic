import {createContext} from 'react'
import {ITasksPageContext} from './ITasksPageContext'

const TasksPageContext = createContext<ITasksPageContext>({
    saveTaskTemporarily: () => {},
    createTask: () => {},
    deleteTask: () => {},
    updateTask: () => {},
    handleTaskOptions: () => {},
    openTaskForm: () => {}
})

export {TasksPageContext}