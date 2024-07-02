import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { Block } from '../../components/Block'
import { TaskForm } from '../../components/TaskForm'

function Root() {
	return (
		<Block.Root name="my-tasks">
			<Heading.Root>minhas tarefas</Heading.Root>

			<Button.Root variant="primary" type="button">
				criar tarefa
			</Button.Root>
			<TaskForm.Root />
		</Block.Root>
	)
}

export const MyTasks = {
	Root,
}
