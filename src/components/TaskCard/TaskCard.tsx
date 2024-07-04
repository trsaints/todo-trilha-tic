import { Button } from '../Button'
import { ITaskCard } from './ITaskCard'

function Root(props: ITaskCard) {
	const { isEditable, task } = props

	return (
		<details className="task">
			<summary>{task.title}</summary>

			<ul>
				<li>Prioridade: {task.priority}</li>
				<li>Expira em: {task.completionDate.toLocaleDateString()}</li>
				<li>Criado em: {task.creationDate.toLocaleDateString()}</li>
			</ul>

			<p>{task.description}</p>

			{isEditable && (
				<Button.Root variant="secondary">Excluir</Button.Root>
			)}
		</details>
	)
}

export const TaskCard = { Root }
