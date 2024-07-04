import './App.css'

import { BrowserRouter } from 'react-router-dom'

import { Router } from '../../components'

import { Default } from '../../layouts/Default'

import { ErrorPage, Home, MyTasks } from '../../pages'

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
