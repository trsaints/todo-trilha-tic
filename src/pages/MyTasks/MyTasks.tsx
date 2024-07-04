import { useContext } from 'react'

import { TaskContext } from '../../context/TaskContext'

import { Block } from '../../components/Block'
import { BlockElement } from '../../components/BlockElement'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { TaskForm } from '../../components/TaskForm'
import { TaskList } from '../../components/TaskList'

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
