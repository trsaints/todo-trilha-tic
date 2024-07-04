import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

import { Block, BlockElement, Heading, TaskList } from '../../components'

function Root() {
	const { tasks } = useContext(TaskContext)
	const latestTasks = tasks.slice(-3)

	return (
		<Block.Root name="home">
			<Heading.Root>Início</Heading.Root>

			<BlockElement.Root name="recent">
				<Heading.Root>Continue de Onde Parou</Heading.Root>

				<TaskList.Root tasks={latestTasks} />
			</BlockElement.Root>
		</Block.Root>
	)
}

export const Home = {
	Root,
}
