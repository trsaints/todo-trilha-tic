import { useContext } from 'react'
import { BlockContext } from '../../context/BlockContext'

import { IHeadingProps } from '../../Props/IHeadingProps'

import './Heading.css'

function Root(props: IHeadingProps) {
	const context = useContext(BlockContext)
	const element = `${context.name}__heading`

	switch (context.level) {
		case 1:
			return <h1 className={element}>{props.children}</h1>
		case 2:
			return <h2 className={element}>{props.children}</h2>
		case 3:
			return <h3 className={element}>{props.children}</h3>
		case 4:
			return <h4 className={element}>{props.children}</h4>
		case 5:
			return <h5 className={element}>{props.children}</h5>
		case 6:
			return <h6 className={element}>{props.children}</h6>
		default:
			return <hgroup className={element}>{props.children}</hgroup>
	}
}

export const Heading = {
	Root,
}
