import {ComponentProps} from 'react'

export interface INavbar extends ComponentProps<'nav'> {
	block: string
	placeholders: string[]
	urls: string[]
}
