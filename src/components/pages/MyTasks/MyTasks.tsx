import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { Block } from '../../Block'
import { TaskForm } from '../../TaskForm'

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
