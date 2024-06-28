import ISectionProps from '../../Props/ISectionProps'
import { ElementContext } from '../../context/ElementContext'

function Root(props: ISectionProps) {
    return (
        <ElementContext.Provider value={props}>
            <article className={props.block}>{props.children}</article>
        </ElementContext.Provider>
    )
}

export const Section = {
    Root,
}
