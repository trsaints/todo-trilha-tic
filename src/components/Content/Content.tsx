import { useContext } from 'react'
import IContentProps from '../../Props/IContentProps'
import { SectionContext } from '../../context/SectionContext'
import ISectionContext from '../../context/interface/ISectionContext'

function Root(props: IContentProps) {
    const context = useContext(SectionContext)

    const localContext: ISectionContext = {
        block: context.block,
        level: context.level + 1,
    }

    const blockElement = `${context.block}__content`

    return (
        <article className={blockElement}>
            <SectionContext.Provider value={localContext}>
                {props.children}
            </SectionContext.Provider>
        </article>
    )
}

export const Content = {
    Root,
}