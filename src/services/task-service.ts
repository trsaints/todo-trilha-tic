import {ITask} from '../entities'
import {Priority} from '../types'

function getEmptyTask() {
    const emptyTask: ITask = {
        id: 0,
        title: '',
        priority: 'low',
        completionDate: new Date(),
        creationDate: new Date(),
        description: ''
    }

    return emptyTask
}

function getFormData(form: HTMLFormElement, id?: number) {
    const today  = new Date()
    const data   = new FormData(form)

    const formTask: ITask = {
        id: id ?? Date.now(),
        title: data.get('title') as string,
        priority: data.get('priority') as Priority,
        completionDate: new Date(data.get('completionDate') as string),
        creationDate: today,
        description: data.get('description') as string,
    }
    
    return formTask
}

export const taskService = {
    getEmptyTask,
    getFormData
}