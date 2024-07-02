import { useContext } from 'react'
import { ISectionProps } from '../../Props/ISectionProps'
import { SectionContext } from '../../context/SectionContext'
import { ISectionContext } from '../../context/interface/ISectionContext'

function Root(props: ISectionProps) {
	const context = useContext(SectionContext)

	const localContext: ISectionContext = {
		block: props.block,
		level: context.level + 1,
	}

	return (
		<SectionContext.Provider value={localContext}>
			<article className={props.block}>{props.children}</article>
		</SectionContext.Provider>
	)
}

export const Section = {
	Root,
}
