import {createContext} from 'react'
import {ITasksPageContext} from './ITasksPageContext'

const TasksPageContext = createContext<ITasksPageContext>({
    handleTaskOptions: () => {},
    openTaskForm: () => {}
})

export {TasksPageContext}