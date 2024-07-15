import {IButton} from './IButton'

import './Button.css'

function Button(props: IButton) {
    const {blockElement, variant, children, onHandleClick, action} = props

    const buttonSelector = `${blockElement}__button btn--${variant}`

    return (
        <button className={buttonSelector} type={props.type} onClick={onHandleClick} data-action={action}>
            {children}
        </button>
    )
}

export {Button}