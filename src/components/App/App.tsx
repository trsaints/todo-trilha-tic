import './App.css'

import { BrowserRouter } from 'react-router-dom'

import { Router } from '../../components'
import { Home } from '../../pages/Home'
import { MyTasks } from '../../pages/MyTasks'
import { Default } from '../../layouts/Default'
import { ErrorPage } from '../../pages/ErrorPage'

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
				{
					name: '*',
					element: <ErrorPage.Root statusCode={404} />,
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
