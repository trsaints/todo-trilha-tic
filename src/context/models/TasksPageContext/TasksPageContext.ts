import {createContext} from 'react'
import {ITasksPageContext} from './ITasksPageContext'

const TasksPageContext = createContext<ITasksPageContext>({
    saveNewTaskTemporarily: () => {},
    createTask: () => {},
    deleteTask: () => {},
    updateTask: () => {},
    handleTaskOptions: () => {},
    openTaskForm: () => {}
})

export {TasksPageContext}