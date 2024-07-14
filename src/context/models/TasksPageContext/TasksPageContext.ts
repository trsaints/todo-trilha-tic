import {createContext} from 'react'
import {ITasksPageContext} from './ITasksPageContext'

const TasksPageContext = createContext<ITasksPageContext>({
    saveTaskTemporarily: () => {},
    createTask: () => {},
    openTaskForm: () => {}
})

export {TasksPageContext}