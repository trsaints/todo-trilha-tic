import { useContext } from 'react'
import { BlockContext, IBlockContext } from '../../context/models'
import { IBlock } from './IBlock'

function Block(props: IBlock) {
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

export {Block}
