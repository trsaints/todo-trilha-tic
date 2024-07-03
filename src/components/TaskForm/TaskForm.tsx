import { FormEvent, useState } from 'react'
import { Button } from '../Button'
import { FormField } from '../TextField'
import { Priority, Task } from '../../Types/Task'

function Root() {
	const [task, setTask] = useState<Task>()

	const saveTaskTemporarly = (e: FormEvent) => {
		const data = new FormData(e.currentTarget.closest('form') ?? undefined)

		const formTask: Task = {
			id: Date.now(),
			title: data.get('title') as string,
			priority: data.get('priority') as Priority,
			completionDate: new Date(data.get('completionDate') as string),
			creationDate: new Date(),
			description: data.get('description') as string,
		}

		setTask(formTask)

		console.log(formTask)
	}

	return (
		<form onChange={saveTaskTemporarly}>
			<fieldset>
				<legend>Nova Tarefa</legend>

				<FormField.Root
					name="title"
					label="título"
					type="text"
					id="title"
				/>

				<div className="form__field">
					<label htmlFor="priority">Prioridade:</label>
					<input name="priority" type="text" id="priority" />
				</div>

				<div className="form__field">
					<label htmlFor="completionDate">Prazo:</label>
					<input
						name="completionDate"
						type="date"
						id="completionDate"
					/>
				</div>

				<FormField.Root
					name="description"
					label="descrição"
					id="description"
				/>
			</fieldset>

			<Button.Root variant="primary" type="submit">
				criar tarefa
			</Button.Root>
		</form>
	)
}

export const TaskForm = {
	Root,
}
