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
        console.log(readWriteRef.current)
        console.log(readWriteId)

        setTasks(prevTasks =>
            prevTasks.map(task => task.id === newTask.id ? newTask : task))
    }

    const deleteTask = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id.toString() !== taskId))
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
            deleteTask(taskId)
        else if (action === 'edit')
            openTaskForm(e)
    }

    const openTaskForm = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        const action = target?.dataset.action as string

        console.log(action)

        const modal = document.querySelector('#modal') as HTMLDialogElement
        const form  = document.querySelector('#task-form') as HTMLFormElement

        // if (!modal || !form || !target || !action) return

        if (form) form.reset()

        const emptyTask = taskService.getEmptyTask()
        setTask(emptyTask)

        modal.showModal()
        setIsModalOpen(true)

        const actionHandler = action === 'create'
                              ? createTask
                              : action === 'edit'
                                ? updateTask : () => {
                }

        setModalContent(<TaskForm onHandleChange={saveNewTaskTemporarily} onHandleSubmit={actionHandler}/>)
    }

    const context: ITasksPageContext = {
        saveNewTaskTemporarily: saveNewTaskTemporarily,
        createTask,
        deleteTask,
        updateTask,
        handleTaskOptions,
        openTaskForm
    }

    return <TasksPageContext.Provider value={context}>{children}</TasksPageContext.Provider>
}

export {TasksPageContextProvider}