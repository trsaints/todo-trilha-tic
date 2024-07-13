import {ComponentProps} from 'react'

export interface INavbar extends ComponentProps<'nav'> {
	placeholders: string[]
	urls: string[]
}
