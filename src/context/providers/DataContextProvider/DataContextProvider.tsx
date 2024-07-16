import {ReactNode, useEffect, useState} from 'react'
import {DataContext, IDataContext} from '../../models'

import {taskService} from '../../../services'

import {ITask} from '../../../entities'
import {IDataContextProvider} from './IDataContextProvider.ts'

function DataContextProvider(props: IDataContextProvider) {
    const [tasks, setTasks] = useState<ITask[]>([])
    
    const loadTasks = async () => {
        const data = await taskService.getTasks()
        setTasks(data)
    }

    const [task, setTask] = useState<ITask>(taskService.getEmptyTask)

    const [isEditable, setIsEditable] = useState<boolean>(false)

    const [isModalOpen, setIsModalOpen]   = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<ReactNode>(null)

    const context: IDataContext = {
        isEditable,
        tasks,
        task,
        isModalOpen,
        modalContent,
        setTask,
        setIsEditable,
        setTasks,
        setIsModalOpen,
        setModalContent
    }
    
    useEffect(() => {
        loadTasks().finally(() => {})
    }, [])
    
    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContextProvider}