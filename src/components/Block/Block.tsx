import { useContext } from 'react'
import { IBlockProps } from '../../Props/ISectionProps'
import { BlockContext } from '../../context/BlockContext'
import { IBlockContext } from '../../context/interface/IBlockContext'

function Root(props: IBlockProps) {
	const context = useContext(BlockContext)

	const localContext: IBlockContext = {
		block: props.name,
		level: context.level + 1,
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
