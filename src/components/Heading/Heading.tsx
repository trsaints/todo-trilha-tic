import { useContext } from 'react'
import { SectionContext } from '../../context/SectionContext'
import IHeadingProps from '../../Props/IHeadingProps'

function Root(props: IHeadingProps) {
    const context = useContext(SectionContext)
    const blockElement = `${context.block}__heading`

    switch (context.level) {
        case 1:
            return <h1 className={blockElement}>{props.children}</h1>
        case 2:
            return <h2 className={blockElement}>{props.children}</h2>
        case 3:
            return <h3 className={blockElement}>{props.children}</h3>
        case 4:
            return <h4 className={blockElement}>{props.children}</h4>
        case 5:
            return <h5 className={blockElement}>{props.children}</h5>
        case 6:
            return <h6 className={blockElement}>{props.children}</h6>
        default:
            return <hgroup className={blockElement}>{props.children}</hgroup>
    }
}

export const Heading = {
    Root,
}
