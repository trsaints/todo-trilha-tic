import { useContext } from 'react'
import { ISectionProps } from '../../Props/ISectionProps'
import { BlockContext } from '../../context/BlockContext'
import { IBlockContext } from '../../context/interface/IBlockContext'

function Root(props: ISectionProps) {
	const context = useContext(BlockContext)

	const localContext: IBlockContext = {
		block: props.block,
		level: context.level + 1,
	}

	return (
		<BlockContext.Provider value={localContext}>
			<article className={props.block}>{props.children}</article>
		</BlockContext.Provider>
	)
}

export const Section = {
	Root,
}
