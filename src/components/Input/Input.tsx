import { IInput } from './IInput'

function Input(props: IInput) {
	if (props.type == undefined)
		return <textarea name={props.name} id={props.id}></textarea>
	else 
		return <input type={props.type} name={props.name} id={props.id} />
}

export {Input}