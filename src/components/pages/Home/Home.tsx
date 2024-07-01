import { Task } from '../../../Types/Task'
import { Content } from '../../Content'
import { Heading } from '../../Heading'
import { Section } from '../../Section'
import { TaskList } from '../../TaskList'

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
			id: 0,
			title: 'Comer bolo',
			priority: 'high',
			completionDate: new Date(),
			creationDate: new Date(),
			description: 'comer uma fatia de bolo',
		},
		{
			id: 1,
			title: 'Comer acarajé',
			priority: 'high',
			completionDate: new Date('2021-10-10'),
			creationDate: new Date('2021-10-10'),
			description: 'comer um acarajé',
		},
		{
			id: 2,
			title: 'Comer pastel',
			priority: 'high',
			completionDate: new Date('2022-12-11'),
			creationDate: new Date('2022-06-11'),
			description: 'comer um pastel de queijo',
		},
	]

	return (
		<Section.Root block="home">
			<Heading.Root>Início</Heading.Root>

			<Content.Root>
				<Heading.Root>Opções</Heading.Root>

                <TaskList.Root tasks={tasks} />
			</Content.Root>
		</Section.Root>
	)
}

export const Home = {
	Root,
}
