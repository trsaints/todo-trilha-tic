import {IButton} from './IButton'

import './Button.css'

function Button(props: IButton) {
    const {blockElement, variant, children, onHandleClick} = props

    const buttonSelector = `${blockElement}__button btn--${variant}`

    return (
        <button className={buttonSelector} type={props.type} onClick={onHandleClick}>
            {children}
        </button>
    )
}

export {Button}