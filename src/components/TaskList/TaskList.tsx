import ITaskListProps from '../../Props/ITaskListProps'

function Root(props: ITaskListProps) {
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

	return <ul>{tasks}</ul>
}

export const TaskList = {
	Root,
}
