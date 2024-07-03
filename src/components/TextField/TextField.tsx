import { Input } from '../Input'
import { ITextField } from './ITextField'

function Root(props: ITextField) {
	return (
		<div className="form__field">
			<label htmlFor={props.id}>{props.label}</label>

			<Input.Root
				name={props.name}
				type={props.type}
				id={props.id}
			/>
		</div>
	)
}


export const TextField = {
	Root,
}
