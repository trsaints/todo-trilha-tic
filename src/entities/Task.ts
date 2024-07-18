import {Entity} from './Entity'
import {Priority, TaskProps} from '../types'

export class Task extends Entity {
    priority: Priority
    completionDate: Date
    creationDate: Date
    description: string

    constructor(task: TaskProps) {
        super(task.id, task.title)
        this.priority       = task.priority
        this.completionDate = new Date(task.completionDate)
        this.creationDate   = new Date(task.creationDate)
        this.description    = task.description
    }
}