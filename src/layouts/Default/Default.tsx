import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Outlet } from 'react-router-dom'
import { TaskContextProvider } from '../../context/providers/TaskContextProvider'

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
