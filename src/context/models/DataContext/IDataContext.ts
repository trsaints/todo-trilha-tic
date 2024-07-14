import {Dispatch, ReactNode, SetStateAction} from 'react'
import {ITask} from '../../../entities'

export interface IDataContext {
    isEditable: boolean
    tasks: ITask[]
    task: ITask
    isModalOpen: boolean
    modalContent: ReactNode
    
    setTask: Dispatch<SetStateAction<ITask>>
    setTasks: Dispatch<SetStateAction<ITask[]>>
    setIsEditable: Dispatch<SetStateAction<boolean>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setModalContent: Dispatch<SetStateAction<ReactNode>>
}
