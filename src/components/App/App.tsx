import './App.css'

import { BrowserRouter } from 'react-router-dom'

import { Router } from '../Router/'
import { Home } from '../../pages/Home'
import { MyTasks } from '../../pages/MyTasks'
import { Default } from '../../layouts/Default'

function App() {
	const routes = [
		{
			name: '/',
			element: <Default.Root />,
			routePaths: [
				{
					name: '/',
					element: <Home.Root />,
				},
				{
					name: '/my-tasks',
					element: <MyTasks.Root />,
				},
			],
		},
	]

	return (
		<>
			<BrowserRouter>
				<Router.Root mainRoutes={routes} />
			</BrowserRouter>
		</>
	)
}

export { App }
