import {ComponentProps, MouseEventHandler} from 'react'

type variant = 'primary' | 'secondary'

export interface IButton extends ComponentProps<'button'> {
	blockElement: string
	variant: variant
	onHandleClick?: MouseEventHandler<HTMLButtonElement>
}
