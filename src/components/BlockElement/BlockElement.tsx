import {useContext} from 'react'
import {BlockContext, IBlockContext} from '../../context/models'

import {IBlockElement} from './IBlockElement'

function BlockElement(props: IBlockElement) {
    const context = useContext(BlockContext)

    const localContext: IBlockContext = {
        name: context.name,
        level: context.level + 1,
    }

    const element = `${context.name}__${props.name}`

    return (
        <BlockContext.Provider value={localContext}>
            <article className={element}>{props.children}</article>
        </BlockContext.Provider>
    )
}

export {BlockElement}
