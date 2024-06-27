import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../Router/Router'
import { Index } from '../Index/Index'
import { MyTasks } from '../MyTasks/MyTasks'

function App() {
    const routes = {
        paths: ['/', '/my-tasks'],
        elements: [Index.Root(), MyTasks.Root()],
    }

    return (
        <>
            <BrowserRouter>
                <Router.Root paths={routes.paths} elements={routes.elements} />
            </BrowserRouter>
        </>
    )
}

export default App
