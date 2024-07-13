import { Route, Routes } from 'react-router-dom'

import { IRouter } from './IRouter'

function Router(props: IRouter) {
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

export {Router}
