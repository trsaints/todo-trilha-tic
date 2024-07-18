import {Dispatch, ReactNode, SetStateAction} from 'react'
import {Task} from '../../../entities'

export interface IDataContext {
    isEditable: boolean
    tasks: Task[]
    task: Task
    isModalOpen: boolean
    modalContent: ReactNode
    
    setTask: Dispatch<SetStateAction<Task>>
    setTasks: Dispatch<SetStateAction<Task[]>>
    setIsEditable: Dispatch<SetStateAction<boolean>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setModalContent: Dispatch<SetStateAction<ReactNode>>
}
