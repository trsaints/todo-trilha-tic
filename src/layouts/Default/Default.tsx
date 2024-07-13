import { TaskContextProvider } from '../../context/providers'

import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

function DefaultLayout() {
	const links = {
		placeholders: ['Home', 'My Tasks'],
		urls: ['/', '/my-tasks'],
	}

	return (
		<TaskContextProvider>
			<Navbar {...links} />
			<Outlet />
			<Footer author="Thiago Rodrigues" />
		</TaskContextProvider>
	)
}

export {DefaultLayout}
