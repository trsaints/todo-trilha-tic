import { IButton } from './IButton'

import './Button.css'

function Root(props: IButton) {
	return (
		<button className={`button--${props.variant}`} type={props.type}>
			{props.children}
		</button>
	)
}

export const Button = {
    Root,
}