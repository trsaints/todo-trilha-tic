import { useContext, useEffect } from 'react'

import { TaskContext } from '../../context/models'

import {
	Block,
	BlockElement,
	Button,
	Heading,
	TaskForm,
	TaskList,
} from '../../components'

function TasksPage() {
	const { tasks, setIsEditable } = useContext(TaskContext)

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