import { useContext } from 'react'
import { IBlockElement } from './IBlockElement'
import { BlockContext } from '../../context/BlockContext'
import { IBlockContext } from '../../context/interface/IBlockContext'

function Root(props: IBlockElement) {
	const context = useContext(BlockContext)

	const localContext: IBlockContext = {
		name: context.name,
		level: context.level + 1,
	}

	const element = `${context.name}__${props.name}`

	return (
		<BlockContext.Provider value={localContext}>
			<article className={element}>{props.children}</article>
		</BlockContext.Provider>
	)
}

export const BlockElement = {
	Root,
}
