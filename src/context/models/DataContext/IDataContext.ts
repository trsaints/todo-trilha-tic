import {Task} from '../../../types'

export interface IDataContext {
    isEditable: boolean
    tasks: Task[]
    task: Task
    setTask: (task: Task) => void
    setTasks: (tasks: Task[]) => void
    setIsEditable: (isEditable: boolean) => void
}
