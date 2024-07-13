import { useContext, useEffect } from 'react'
import { TaskContext } from '../../context/models'

import { Block, BlockElement, Heading, TaskList } from '../../components'

function HomePage() {
	const { tasks, setIsEditable } = useContext(TaskContext)
	const latestTasks = tasks.slice(-3)

	useEffect(() => {
		setIsEditable(false)
	}, [])

	return (
		<Block name="home">
			<Heading>Início</Heading>

			<BlockElement name="recent">
				<Heading>Continue de Onde Parou</Heading>

				<TaskList tasks={latestTasks} />
			</BlockElement>
		</Block>
	)
}

export {HomePage}