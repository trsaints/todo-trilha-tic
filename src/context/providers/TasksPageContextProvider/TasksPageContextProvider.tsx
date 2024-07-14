import {FormEvent, useContext, useEffect, useRef} from 'react'
import {Priority, Task} from '../../../types'
import {DataContext} from '../../models'

import {TaskForm} from '../../../components'

import {ITasksPageContext, TasksPageContext} from '../../models/TasksPageContext'
import {ITasksPageContextProvider} from './ITasksPageContextProvider'

function TasksPageContextProvider(props: ITasksPageContextProvider) {
    const {task}     = useContext(DataContext)
    const {
              setTask,
              setTasks,
              setModalContent,
              setIsModalOpen
          }          = useContext(DataContext)
    const {children} = props

    const taskRef = useRef<Task | null>(task)

    useEffect(() => {
        taskRef.current = task
    }, [task])

    const saveTaskTemporarily = () => {
        const today  = new Date()
        const target = document.querySelector('#task-form') as HTMLFormElement
        const data   = new FormData(target)

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

        setTasks(prevTasks => taskRef.current ? [...prevTasks, taskRef.current] : prevTasks)
    }

    const openTaskForm = () => {
        const modal = document.querySelector('#modal') as HTMLDialogElement
        const form  = document.querySelector('#task-form') as HTMLFormElement

        if (!modal) return

        if (form) form.reset()

        const emptyTask: Task = {
            id: Date.now(),
            title: '',
            priority: 'low',
            completionDate: new Date(),
            creationDate: new Date(),
            description: '',
        }

        setTask(emptyTask)

        modal.showModal()
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