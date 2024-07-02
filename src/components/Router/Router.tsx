import { Routes, Route } from 'react-router-dom'
import { IRouterProps } from '../../Props/IRouterProps'

function Root(props: IRouterProps) {
	return (
		<Routes>
			{props.paths.map((path, index) => (
				<Route
					key={`${path}-${index}`}
					path={path}
					element={props.elements[index]}
				/>
			))}
		</Routes>
	)
}

export const Router = {
	Root,
}
