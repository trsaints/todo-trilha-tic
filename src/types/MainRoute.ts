import { RoutePath } from './RoutePath'

export type MainRoute = {
	name: string
	element: JSX.Element
	routePaths: RoutePath[]
}
