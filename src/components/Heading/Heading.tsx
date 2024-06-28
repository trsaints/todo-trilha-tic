import { useContext } from 'react'
import { SectionContext } from '../../context/SectionContext'
import IHeadingProps from '../../Props/IHeadingProps'

function Root(props: IHeadingProps) {
    const context = useContext(SectionContext)
    const blockElement = `${context.block}__heading`

    return <h1 className={blockElement}>{props.children}</h1>
}

export const Heading = {
    Root,
}
