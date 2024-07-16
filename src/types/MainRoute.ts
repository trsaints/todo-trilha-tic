import { RoutePath } from './RoutePath'
import {ReactElement} from 'react'

export type MainRoute = {
	name: string
	element: ReactElement
	routePaths: RoutePath[]
}
