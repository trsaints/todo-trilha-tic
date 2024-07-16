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
    const today = new Date();
    const data = new FormData(form);

    let completionDate = new Date(data.get('completionDate') as string);

    // Adjust for the timezone offset to ensure the date is correct
    completionDate = new Date(completionDate.getTime() + completionDate.getTimezoneOffset() * 60000);

    const formTask: ITask = {
        id: id ?? Date.now(),
        title: data.get('title') as string,
        priority: data.get('priority') as Priority,
        completionDate: completionDate,
        creationDate: today,
        description: data.get('description') as string,
    }

    return formTask;
}

export const taskService = {
    getEmptyTask,
    getFormData
}