import {ITasksPageContext, TasksPageContext} from '../../models/TasksPageContext'

import {ITasksPageContextProvider} from './ITasksPageContextProvider'
import {FormEvent, useContext} from 'react'
import {Priority, Task} from '../../../types'
import {DataContext} from '../../models'
import {TaskForm} from '../../../components'

function TasksPageContextProvider(props: ITasksPageContextProvider) {
    const {task, tasks} = useContext(DataContext)
    const {
              setTask,
              setTasks,
              setIsModalOpen,
              setModalContent
          }             = useContext(DataContext)
    const {children}    = props

    const saveTaskTemporarily = (e: FormEvent) => {
        const today = new Date()
        const data  = new FormData(e.currentTarget.closest('form') ?? undefined)

        const formTask: Task = {
            id: Date.now(),
            title: data.get('title') as string,
            priority: data.get('priority') as Priority,
            completionDate: new Date(data.get('completionDate') as string),
            creationDate: today,
            description: data.get('description') as string,
        }

        setTask(formTask)
    }

    const createTask = (e: FormEvent) => {
        e.preventDefault()

        if (task) setTasks([...tasks, task])
    }

    const openTaskForm = () => {
        setIsModalOpen(true)
        setModalContent(<TaskForm onHandleChange={saveTaskTemporarily} onHandleSubmit={createTask}/>)
    }

    const context: ITasksPageContext = {
        saveTaskTemporarily,
        createTask,
        openTaskForm
    }

    return <TasksPageContext.Provider value={context}>{children}</TasksPageContext.Provider>
}

export {TasksPageContextProvider}