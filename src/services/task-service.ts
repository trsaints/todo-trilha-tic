import {mockApi} from '../data'

import {Priority, TaskProps} from '../types'
import {Task} from '../entities'

async function getTasks() {
    const {data = []} = await mockApi.get('http://localhost:3333/tasks')

    return data.map((task: TaskProps) => new Task(task)) as Task[]
}

async function addTask(task: Task) {
    const parsedTask = {
        ...task,
        id: task.id.toString(),
    }

    const {data} = await mockApi.post('http://localhost:3333/tasks', parsedTask)

    return new Task(data)
}

async function updateTask(task: Task) {
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
    const emptyTask: TaskProps = {
        id: Date.now(),
        title: '',
        priority: 'low',
        completionDate: '',
        creationDate: new Date().toLocaleDateString(),
        description: ''
    }

    return new Task(emptyTask)
}

function getFormData(form: HTMLFormElement, taskId?: number) {
    const data = new FormData(form)

    const formTask: TaskProps = {
        id: taskId ?? Date.now(),
        title: data.get('title') as string,
        priority: data.get('priority') as Priority,
        completionDate: data.get('completionDate') as string,
        creationDate: new Date().toLocaleDateString(),
        description: data.get('description') as string,
    }

    return new Task(formTask)
}

export const taskService = {
    getEmptyTask,
    getFormData,
    getTasks,
    addTask,
    updateTask,
    removeTask
}