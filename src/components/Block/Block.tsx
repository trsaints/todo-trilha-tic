import { useContext } from 'react'
import { BlockContext, IBlockContext } from '../../context/models'
import { IBlock } from './IBlock'

function Root(props: IBlock) {
	const context = useContext(BlockContext)

	const localContext: IBlockContext = {
		name: props.name,
		level: context.level,
	}

	return (
		<BlockContext.Provider value={localContext}>
			<article className={props.name}>{props.children}</article>
		</BlockContext.Provider>
	)
}

export const Block = {
	Root,
}
