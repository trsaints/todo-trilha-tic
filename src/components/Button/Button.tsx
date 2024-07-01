import IButtonProps from '../../Props/IButtonProps'

import './Button.css'

function Root(props: IButtonProps) {
	return (
		<button className={`button--${props.variant}`} type={props.type}>
			{props.children}
		</button>
	)
}

export const Button = {
    Root,
}