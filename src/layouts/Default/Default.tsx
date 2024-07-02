import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
	const links = {
		placeholders: ['Home', 'My Tasks'],
		urls: ['/', '/my-tasks'],
	}

	return (
		<>
			<Navbar.Root {...links} />
			<Outlet />
			<Footer.Root author="Thiago Rodrigues" />
		</>
	)
}

export const Default = {
	Root,
}
