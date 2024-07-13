import { IButton } from './IButton'

import './Button.css'

function Button(props: IButton) {
	const {blockElement, variant, children} = props
	
	const buttonSelector = `${blockElement}__button btn--${variant}`
	
	return (
		<button className={buttonSelector} type={props.type}>
			{children}
		</button>
	)
}

export {Button}