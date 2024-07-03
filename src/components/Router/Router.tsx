import { Routes, Route } from 'react-router-dom'
import { IRouter } from './IRouter'

function Root(props: IRouter) {
	return (
		<Routes>
			{props.mainRoutes.map((mainRoute, i) => (
				<Route
					key={i}
					path={mainRoute.name}
					element={mainRoute.element}
				>
					{mainRoute.routePaths.map((routePath, j) => (
						<Route
							key={j}
							path={routePath.name}
							element={routePath.element}
						/>
					))}
				</Route>
			))}
		</Routes>
	)
}

export const Router = {
	Root,
}
