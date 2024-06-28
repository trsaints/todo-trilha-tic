import { useContext } from 'react'
import { ElementContext } from '../../context/ElementContext'
import IHeadingProps from '../../Props/IHeadingProps'

function Root(props: IHeadingProps) {
    const context = useContext(ElementContext)
    const blockElement = `${context.block}__heading`

    return <h1 className={blockElement}>{props.children}</h1>
}

export const Heading = {
    Root,
}
