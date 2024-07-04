import { ITextField } from './ITextField'

import { Input } from '../../components'

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
