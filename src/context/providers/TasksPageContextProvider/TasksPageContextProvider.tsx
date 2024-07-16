import React, {FormEvent, useContext, useEffect, useRef, useState} from 'react'
import {taskService} from '../../../services'
import {DataContext} from '../../models'

import {TaskForm} from '../../../components'
import {ITask} from '../../../entities'

import {ITasksPageContext, TasksPageContext} from '../../models/TasksPageContext'
import {ITasksPageContextProvider} from './ITasksPageContextProvider'

function TasksPageContextProvider(props: ITasksPageContextProvider) {
    const {children} = props

    const [readWriteId, setReadWriteId] = useState<string>('')
    const readWriteRef                  = useRef<string>(readWriteId)

    const {task}  = useContext(DataContext)
    const taskRef = useRef<ITask | null>(task)

    const {
              setTask,
              setTasks,
              setModalContent,
              setIsModalOpen
          } = useContext(DataContext)

    useEffect(() => {
        taskRef.current      = task
        readWriteRef.current = readWriteId
    }, [task, readWriteId])

    const saveNewTaskTemporarily = () => {
        const form     = document.querySelector('#task-form') as HTMLFormElement
        const formTask = taskService.getFormData(form)
        console.table(formTask)

        setTask(formTask)
    }

    const createTask = (e: FormEvent) => {
        e.preventDefault()

        setTasks(prevTasks => taskRef.current ? [...prevTasks, taskRef.current] : prevTasks)

        const emptyTask = taskService.getEmptyTask()
        setTask(emptyTask)
    }

    const updateTask = (e: FormEvent) => {
        e.preventDefault()

        const form    = document.querySelector('#task-form') as HTMLFormElement
        const newTask = taskService.getFormData(form, Number(readWriteRef.current))
        console.table(newTask)

        setTasks(prevTasks =>
            prevTasks.map(task => task.id === newTask.id ? newTask : task))
    }

    const deleteTask = () => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id.toString() !== readWriteRef.current))
    }

    const handleTaskOptions = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        const action = target?.dataset.action as string

        if (!target || !action) return

        const taskCard = target.closest('[data-task-id]') as HTMLElement
        const taskId   = taskCard?.dataset.taskId as string

        if (!taskCard || !taskId) return

        setReadWriteId(taskId)

        if (action === 'delete')
            deleteTask()
        else if (action === 'edit')
            openTaskForm(e)
    }

    const openTaskForm = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        const action = target?.dataset.action as string

        const modal = document.querySelector('#modal') as HTMLDialogElement
        const form  = document.querySelector('#task-form') as HTMLFormElement

        if (form && action === 'create') form.reset()

        setTask(taskService.getEmptyTask())

        modal.showModal()
        setIsModalOpen(true)

        const actionHandler = action === 'create'
                              ? createTask
                              : action === 'edit'
                                ? updateTask : () => {
                }

        setModalContent(
            <TaskForm
                onHandleChange={saveNewTaskTemporarily}
                onHandleSubmit={(e) => {
                    actionHandler(e)
                    modal.close()
                    setIsModalOpen(false)
                }}
            />)
    }

    const context: ITasksPageContext = {
        handleTaskOptions,
        openTaskForm
    }

    return <TasksPageContext.Provider value={context}>{children}</TasksPageContext.Provider>
}

export {TasksPageContextProvider}