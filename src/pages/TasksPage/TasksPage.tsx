import {useContext, useEffect} from 'react'
import {DataContext, TasksPageContext} from '../../context/models'

import {Block, BlockElement, Button, Heading, Modal, TaskList,} from '../../components'

import './TasksPage.css'

function TasksPage() {
    const {tasks, setIsEditable}            = useContext(DataContext)
    const {openTaskForm, handleTaskOptions} = useContext(TasksPageContext)

    useEffect(() => {
        setIsEditable(true)
    }, [setIsEditable])

    return (
        <Block name='my-tasks'>
            <Heading>minhas tarefas</Heading>

            <BlockElement name='options'>
                <Button
                    blockElement='options'
                    variant='primary'
                    type='button'
                    onHandleClick={openTaskForm}
                    action='create'
                >
                    criar tarefa
                </Button>

                <Modal/>
            </BlockElement>

            <TaskList onHandleClick={handleTaskOptions} tasks={tasks}/>
        </Block>
    )
}

export {TasksPage}
