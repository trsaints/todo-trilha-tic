import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../Router/Router'
import { Index } from './Index/Index'
import { MyTasks } from './MyTasks/MyTasks'
import { Navbar } from '../Navbar/Navbar'

function App() {
    const routes = {
        paths: ['/', '/my-tasks'],
        elements: [Index.Root(), MyTasks.Root()],
    }

    const links = {
        placeholders: ['Home', 'My Tasks'],
        urls: ['/', '/my-tasks'],
    }

    return (
        <BrowserRouter>
            <Navbar.Root {...links} />

            <Router.Root {...routes} />
        </BrowserRouter>
    )
}

export default App
