import {useContext, useEffect} from 'react'

import {TasksPageContextProvider} from '../../context/providers/TasksPageContextProvider'
import {TasksPageContext} from '../../context/models/TasksPageContext'
import {DataContext} from '../../context/models'

import {Block, BlockElement, Button, Heading, Modal, TaskList,} from '../../components'

import './TasksPage.css'

function TasksPage() {
    const {tasks, setIsEditable} = useContext(DataContext)

    useEffect(() => {
        setIsEditable(true)
    }, [setIsEditable])

    return (
        <TasksPageContextProvider>
            <TasksPageContext.Consumer>
                {({
                    openTaskForm,
                    handleTaskOptions
                }) => (
                    <Block name='my-tasks'>
                        <Heading>minhas tarefas</Heading>

                        <BlockElement name='options'>
                            <Button 
                                blockElement='options' 
                                variant='primary' 
                                type='button' 
                                onHandleClick={openTaskForm}>
                                criar tarefa
                            </Button>

                            <Modal/>
                        </BlockElement>

                        <TaskList onHandleClick={handleTaskOptions} tasks={tasks}/>
                    </Block>
                )}
            </TasksPageContext.Consumer>
        </TasksPageContextProvider>
    )
}

export {TasksPage}
