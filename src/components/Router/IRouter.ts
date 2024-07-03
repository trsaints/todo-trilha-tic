import { RoutesProps } from 'react-router-dom'
import { MainRoute } from '../../Types/MainRoute'

export interface IRouter extends RoutesProps {
	mainRoutes: MainRoute[]
}
