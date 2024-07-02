import { useContext } from 'react'
import { IContentProps } from '../../Props/IContentProps'
import { BlockContext } from '../../context/BlockContext'
import { IBlockContext } from '../../context/interface/IBlockContext'

function Root(props: IContentProps) {
	const context = useContext(BlockContext)

	const localContext: IBlockContext = {
		block: context.block,
		level: context.level + 1,
	}

	const blockElement = `${context.block}__content`

	return (
		<article className={blockElement}>
			<BlockContext.Provider value={localContext}>
				{props.children}
			</BlockContext.Provider>
		</article>
	)
}

export const Content = {
	Root,
}
