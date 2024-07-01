import { Button } from '../Button'
import { FormField } from '../TextField'

function Root() {
	return (
		<form>
			<fieldset>
				<legend>Nova Tarefa</legend>

				<FormField.Root
					name="title"
					label="título"
					fieldType="text"
					id="title"
				/>

				<div className="form__field">
					<label htmlFor="priority">Prioridade:</label>
					<input type="text" />
				</div>

				<div className="form__field">
					<label htmlFor="priority">Prazo:</label>
					<input type="date" />
				</div>

				<FormField.Root name="title" label="descrição" id="title" />
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
