import { Task } from '../../Types/Task'
import { Heading } from '../../components/Heading'
import { Block } from '../../components/Block'
import { TaskList } from '../../components/TaskList'
import { BlockElement } from '../../components/BlockElement'

function Root() {
	const tasks: Task[] = [
		{
			id: 0,
			title: 'Comer fubá',
			priority: 'high',
			completionDate: new Date(),
			creationDate: new Date(),
			description: 'comer um pouco de fubá',
		},
		{
			id: 1,
			title: 'Comer bolo',
			priority: 'high',
			completionDate: new Date(),
			creationDate: new Date(),
			description: 'comer uma fatia de bolo',
		},
		{
			id: 2,
			title: 'Comer acarajé',
			priority: 'high',
			completionDate: new Date('2021-10-10'),
			creationDate: new Date('2021-10-10'),
			description: 'comer um acarajé',
		},
		{
			id: 3,
			title: 'Comer pastel',
			priority: 'high',
			completionDate: new Date('2022-12-11'),
			creationDate: new Date('2022-06-11'),
			description: 'comer um pastel de queijo',
		},
	]

	return (
		<Block.Root name="home">
			<Heading.Root>Início</Heading.Root>

			<BlockElement.Root name="recent">
				<Heading.Root>Continue de Onde Parou</Heading.Root>

				<TaskList.Root tasks={tasks} />
			</BlockElement.Root>
		</Block.Root>
	)
}

export const Home = {
	Root,
}
