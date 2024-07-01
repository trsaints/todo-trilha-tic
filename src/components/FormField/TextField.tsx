import IFormFieldProps from '../../Props/ITextFieldProps'

function Root(props: IFormFieldProps) {
	return (
		<div className="form__field">
			<label htmlFor={props.id}>{props.label}</label>
			<Input name={props.name} inputType={props.type} id={props.id} />
		</div>
	)
}

function Input(id: string, name: string, type: React.HTMLInputTypeAttribute) {
	return type == undefined ? (
		<textarea name={name} id={id}></textarea>
	) : (
		<input type={type} name={name} id={id} />
	)
}

export const FormField = {
	Root,
}
