import { IInput } from './IInput'

function Root(props: IInput) {
	if (props.type == undefined)
		return <textarea name={props.name} id={props.id}></textarea>
	else return <input type={props.type} name={props.name} id={props.id} />
}

export const Input = {
    Root,
}