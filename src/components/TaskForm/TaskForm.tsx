import { Button } from '../Button'

function Root() {
	return (
		<form>
			<fieldset>
				<legend>Nova Tarefa</legend>

				<div className="form__field">
					<label htmlFor="title">Tarefa:</label>
					<input type="text" />
				</div>

				<div className="form__field">
					<label htmlFor="priority">Prioridade:</label>
					<input type="text" />
				</div>

				<div className="form__field">
					<label htmlFor="priority">Prazo:</label>
					<input type="date" />
				</div>

				<div className="form__field">
					<label htmlFor="priority">Descrição:</label>
					<textarea name="" id=""></textarea>
				</div>
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
