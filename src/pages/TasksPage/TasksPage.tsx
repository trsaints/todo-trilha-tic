import { useContext, useEffect } from 'react'

import { DataContext } from '../../context/models'

import {
	Block,
	BlockElement,
	Button,
	Heading,
	TaskForm,
	TaskList,
} from '../../components'

import './TasksPage.css'

function TasksPage() {
	const { tasks, setIsEditable } = useContext(DataContext)

	useEffect(() => {
		setIsEditable(true)
	}, [])

	return (
		<Block name="my-tasks">
			<Heading>minhas tarefas</Heading>

			<BlockElement name="options">
				<Button blockElement='options' variant="primary" type="button">
					criar tarefa
				</Button>

				<TaskForm />
			</BlockElement>

			<TaskList tasks={tasks} />
		</Block>
	)
}

export {TasksPage}
