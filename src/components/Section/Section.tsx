import ISectionProps from '../../Props/ISectionProps'
import { SectionContext } from '../../context/SectionContext'

function Root(props: ISectionProps) {
    return (
        <SectionContext.Provider value={props}>
            <article className={props.block}>{props.children}</article>
        </SectionContext.Provider>
    )
}

export const Section = {
    Root,
}
