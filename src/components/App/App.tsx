import './App.css'

import { BrowserRouter } from 'react-router-dom'

import { Navbar } from '../Navbar/'
import { Router } from '../Router/'
import { Home } from '../pages/Home'
import { MyTasks } from '../pages/MyTasks'
import { Footer } from '../Footer'

function App() {
    const routes = {
        paths: ['/', '/my-tasks'],
        elements: [Home.Root(), MyTasks.Root()],
    }

    const links = {
        placeholders: ['Home', 'My Tasks'],
        urls: ['/', '/my-tasks'],
    }

    return (
        <>
            <BrowserRouter>
                <Navbar.Root {...links} />

                <Router.Root {...routes} />
            </BrowserRouter>

            <Footer.Root author="Thiago Rodrigues" />
        </>
    )
}

export default App
