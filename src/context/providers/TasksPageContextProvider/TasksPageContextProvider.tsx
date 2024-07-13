import {TasksPageContext, ITasksPageContext} from '../../models/TasksPageContext'

import {ITasksPageContextProvider} from './ITasksPageContextProvider'

function TasksPageContextProvider(props: ITasksPageContextProvider) {
    const {children} = props
    
    const context: ITasksPageContext = {}

    return <TasksPageContext.Provider value={context}>{children}</TasksPageContext.Provider>
}

export {TasksPageContextProvider}