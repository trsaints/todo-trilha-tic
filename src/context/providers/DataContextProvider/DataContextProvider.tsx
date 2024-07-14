import {ReactNode, useState} from 'react'
import {DataContext, IDataContext} from '../../models'

import {taskService} from '../../../services'

import {ITask} from '../../../entities'
import {IDataContextProvider} from './IDataContextProvider.ts'

function DataContextProvider(props: IDataContextProvider) {
    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: 0,
            title: 'Comer fubá',
            priority: 'high',
            completionDate: new Date(),
            creationDate: new Date(),
            description: 'comer um pouco de fubá',
        },
        {
            id: 1,
            title: 'Comer bolo',
            priority: 'high',
            completionDate: new Date(),
            creationDate: new Date(),
            description: 'comer uma fatia de bolo',
        },
        {
            id: 2,
            title: 'Comer acarajé',
            priority: 'high',
            completionDate: new Date('2021-10-10'),
            creationDate: new Date('2021-10-10'),
            description: 'comer um acarajé',
        },
        {
            id: 3,
            title: 'Comer pastel',
            priority: 'high',
            completionDate: new Date('2022-12-11'),
            creationDate: new Date('2022-06-11'),
            description: 'comer um pastel de queijo',
        },
    ])

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
    
    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContextProvider}