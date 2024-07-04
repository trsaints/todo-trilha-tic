import { RoutesProps } from 'react-router-dom'
import { MainRoute } from '../../types'

export interface IRouter extends RoutesProps {
	mainRoutes: MainRoute[]
}
