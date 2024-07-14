import {ITask} from '../entities'

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

export const taskService = {
    getEmptyTask
}