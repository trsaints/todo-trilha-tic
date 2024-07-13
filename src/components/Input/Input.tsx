import { IInput } from './IInput'

function Input(props: IInput) {
	if (props.type == undefined)
		return <textarea className='text-input' name={props.name} id={props.id}></textarea>
	else 
		return <input className='text-input' type={props.type} name={props.name} id={props.id} />
}

export {Input}