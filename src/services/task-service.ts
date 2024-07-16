import {ITask} from '../entities'
import {Priority} from '../types'
import {mockApi} from './mock-api.ts'

async function getTasks() {
    const {data = []} = await mockApi.get('http://localhost:3333/tasks')

    return data.map((task: ITask) => {
        return {
            ...task,
            creationDate: new Date(task.creationDate),
            completionDate: new Date(task.completionDate),
        }
    }) as ITask[]
}

async function addTask(task: ITask) {
    const parsedTask = {
        ...task, 
        id: task.id.toString(),
    }
    const {data} = await mockApi.post('http://localhost:3333/tasks', parsedTask)

    return {
        ...data, 
        creationDate: new Date(data.creationDate),
        completionDate: new Date(data.completionDate),
    }
}

async function updateTask(task: ITask) {
    const parsedTask = {
        ...task, 
        id: task.id.toString(),
    }
    
    await mockApi.put(`http://localhost:3333/tasks/${task.id}`, parsedTask)
}

async function removeTask(id: string) {
    await mockApi.delete(`http://localhost:3333/tasks/${id}`)
}

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
    const today = new Date()
    const data  = new FormData(form)

    let completionDate = new Date(data.get('completionDate') as string)

    // Adjust for the timezone offset to ensure the date is correct
    completionDate = new Date(completionDate.getTime() + completionDate.getTimezoneOffset() * 60000)

    const formTask: ITask = {
        id: id ?? Date.now(),
        title: data.get('title') as string,
        priority: data.get('priority') as Priority,
        completionDate: completionDate,
        creationDate: today,
        description: data.get('description') as string,
    }

    return formTask
}

export const taskService = {
    getEmptyTask,
    getFormData,
    getTasks,
    addTask,
    updateTask,
    removeTask
}