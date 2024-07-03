import { IInput } from './IInput'
import { ITextField } from './ITextField'

function Root(props: ITextField) {
	return (
		<div className="form__field">
			<label htmlFor={props.id}>{props.label}</label>

			<Input
				name={props.name}
				type={props.type}
				id={props.id}
			/>
		</div>
	)
}

function Input(props: IInput) {
	if (props.type == undefined)
		return <textarea name={props.name} id={props.id}></textarea>
	else 
		return <input type={props.type} name={props.name} id={props.id} />
}

export const TextField = {
	Root,
}
