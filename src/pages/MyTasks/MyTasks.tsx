import { useContext } from 'react'

import { TaskContext } from '../../context/models'

import {
	Block,
	BlockElement,
	Button,
	Heading,
	TaskForm,
	TaskList,
} from '../../components'

function Root() {
	const { tasks } = useContext(TaskContext)

	return (
		<Block.Root name="my-tasks">
			<Heading.Root>minhas tarefas</Heading.Root>

			<BlockElement.Root name="options">
				<Button.Root variant="primary" type="button">
					criar tarefa
				</Button.Root>

				<TaskForm.Root />
			</BlockElement.Root>

			<TaskList.Root tasks={tasks} />
		</Block.Root>
	)
}

export const MyTasks = {
	Root,
}
