import { DataContextProvider } from '../../context/providers'

import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'
import {Modal} from '../../components/Modal/Modal.tsx'

function DefaultLayout() {
	const links = {
		placeholders: ['HomePage', 'My Tasks'],
		urls: ['/', '/my-tasks'],
	}

	return (
		<DataContextProvider>
			<Navbar block='main' {...links} />
			<Outlet />
			<Footer author="Thiago Rodrigues" />
		</DataContextProvider>
	)
}

export {DefaultLayout}
