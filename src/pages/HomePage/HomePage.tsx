import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/models'

import { Block, BlockElement, Heading, TaskList } from '../../components'

import './HomePage.css'

function HomePage() {
	const { tasks, setIsEditable } = useContext(DataContext)
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