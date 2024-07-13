import {useContext, useEffect} from 'react'

import {DataContext} from '../../context/models'

import {Block, BlockElement, Button, Heading, TaskForm, TaskList,} from '../../components'

import './TasksPage.css'
import {TasksPageContextProvider} from '../../context/providers/TasksPageContextProvider'
import {TasksPageContext} from '../../context/models/TasksPageContext'
import {Modal} from '../../components/Modal/Modal.tsx'

function TasksPage() {
    const {tasks, setIsEditable} = useContext(DataContext)

    useEffect(() => {
        setIsEditable(true)
    }, [setIsEditable])

    return (
        <TasksPageContextProvider>
            <TasksPageContext.Consumer>
                {({
                    createTask,
                    saveTaskTemporarily
                }) => (
                    <Block name='my-tasks'>
                        <Heading>minhas tarefas</Heading>

                        <Modal />

                        <BlockElement name='options'>
                            <Button blockElement='options' variant='primary' type='button'>
                                criar tarefa
                            </Button>

                            <TaskForm onHandleChange={saveTaskTemporarily} onHandleSubmit={createTask}/>
                        </BlockElement>

                        <TaskList tasks={tasks}/>
                    </Block>
                )}
            </TasksPageContext.Consumer>
        </TasksPageContextProvider>
    )
}

export {TasksPage}
