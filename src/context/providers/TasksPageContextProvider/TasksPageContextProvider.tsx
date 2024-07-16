import {FormEventHandler, MouseEventHandler, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react'
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
    const taskRef = useRef<ITask>(task)

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

    const saveNewTaskTemporarily = useCallback<FormEventHandler<HTMLFormElement>>(
        () => {
            const form     = document.querySelector('#task-form') as HTMLFormElement
            const formTask = taskService.getFormData(form)

            setTask(formTask)
        }, [setTask])

    const createTask = useCallback<FormEventHandler<HTMLFormElement>>(
        (e) => {
            e.preventDefault()

            setTasks(prevTasks => taskRef.current ? [...prevTasks, taskRef.current] : prevTasks)

            const emptyTask = taskService.getEmptyTask()
            setTask(emptyTask)
        }, [setTasks, setTask])

    const updateTask = useCallback<FormEventHandler<HTMLFormElement>>(
        (e) => {
            e.preventDefault()

            const form    = document.querySelector('#task-form') as HTMLFormElement
            const newTask = taskService.getFormData(form, Number(readWriteRef.current))

            setTasks(prevTasks =>
                prevTasks.map(task => task.id === newTask.id ? newTask : task))
        }, [readWriteRef, setTasks])

    const deleteTask = useCallback((id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id.toString() !== id))
    }, [setTasks])

    const openTaskForm = useCallback<MouseEventHandler<HTMLElement>>(
        (e) => {
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
        }, [createTask, updateTask, saveNewTaskTemporarily, setIsModalOpen, setModalContent, setTask])

    const handleTaskOptions = useCallback<MouseEventHandler<HTMLElement>>(
        (e) => {
            const target = e.target as HTMLElement
            const action = target?.dataset.action as string

            if (!target || !action) return

            const taskCard = target.closest('[data-task-id]') as HTMLElement
            const taskId   = taskCard?.dataset.taskId as string

            if (!taskCard || !taskId) return

            if (action === 'delete') {
                deleteTask(taskId)
            } else if (action === 'edit') {
                setReadWriteId(taskId) // Assuming you still need to set this for editing
                openTaskForm(e)
            }
        }, [deleteTask, openTaskForm, setReadWriteId])

    const context = useMemo<ITasksPageContext>(() => ({
        openTaskForm,
        handleTaskOptions
    }), [openTaskForm, handleTaskOptions])

    return <TasksPageContext.Provider value={context}>{children}</TasksPageContext.Provider>
}

export {TasksPageContextProvider}