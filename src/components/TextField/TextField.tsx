import IInputProps from '../../Props/IInputProps'
import IFormFieldProps from '../../Props/ITextFieldProps'

function Root(props: IFormFieldProps) {
	return (
		<div className="form__field">
			<label htmlFor={props.id}>{props.label}</label>
			<Input name={props.name} type={props.type} id={props.id} />
		</div>
	)
}

function Input(props: IInputProps) {
	if (props.type == undefined)
		return <textarea name={props.name} id={props.id}></textarea>
	else 
		return <input type={props.type} name={props.name} id={props.id} />
}

export const FormField = {
	Root,
}
