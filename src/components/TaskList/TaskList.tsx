import { useContext } from 'react'
import { ITaskList } from '../../Props/ITaskList'
import { BlockContext } from '../../context/BlockContext'

function Root(props: ITaskList) {
	const context = useContext(BlockContext)
	const element = `${context.name}__tasks`

	const tasks = props.tasks.map((task) => (
		<li key={task.id}>
			<details className="task">
				<summary>{task.title}</summary>

				<ul>
					<li>Prioridade: {task.priority}</li>
					<li>
						Expira em: {task.completionDate.toLocaleDateString()}
					</li>
					<li>Criado em: {task.creationDate.toLocaleDateString()}</li>
				</ul>

				<p>{task.description}</p>
			</details>
		</li>
	))

	return <ul className={element}>{tasks}</ul>
}

export const TaskList = {
	Root,
}
