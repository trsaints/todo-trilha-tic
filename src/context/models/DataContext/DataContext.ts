import {createContext} from 'react'
import {IDataContext} from './IDataContext.ts'

const DataContext = createContext<IDataContext>({
    tasks: [],
    task: {
        id: 0,
        title: '',
        priority: 'high',
        completionDate: new Date(),
        creationDate: new Date(),
        description: '',
    },
    isEditable: false,
    isModalOpen: true,
    modalContent: null,
    setTask: () => {},
    setTasks: () => {},
    setIsEditable: () => {},
    setIsModalOpen: () => {},
    setModalContent: () => {},
})

export {DataContext}
