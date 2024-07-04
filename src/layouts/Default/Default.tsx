import { TaskContextProvider } from '../../context/providers/TaskContextProvider'

import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

function Root() {
	const links = {
		placeholders: ['Home', 'My Tasks'],
		urls: ['/', '/my-tasks'],
	}

	return (
		<TaskContextProvider.Root>
			<Navbar.Root {...links} />
			<Outlet />
			<Footer.Root author="Thiago Rodrigues" />
		</TaskContextProvider.Root>
	)
}

export const Default = {
	Root,
}
