import { FormEvent, useContext, useState } from 'react'
import { Priority, Task } from '../../Types/Task'
import { TaskContext } from '../../context/models'

import { Button, TextField } from '../../components'

function Root() {
	const { tasks, setTasks } = useContext(TaskContext)
	const [task, setTask] = useState<Task>()
	const today = new Date()

	const saveTaskTemporarly = (e: FormEvent) => {
		const data = new FormData(e.currentTarget.closest('form') ?? undefined)

		const formTask: Task = {
			id: Date.now(),
			title: data.get('title') as string,
			priority: data.get('priority') as Priority,
			completionDate: new Date(data.get('completionDate') as string),
			creationDate: today,
			description: data.get('description') as string,
		}

		setTask(formTask)
	}

	const createTask = (e: FormEvent) => {
		e.preventDefault()

		if (task) setTasks([...tasks, task])
	}

	return (
		<form onChange={saveTaskTemporarly} onSubmit={createTask}>
			<fieldset>
				<legend>Nova Tarefa</legend>

				<TextField.Root
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

				<TextField.Root
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
