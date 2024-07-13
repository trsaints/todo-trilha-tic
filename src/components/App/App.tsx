import {BrowserRouter} from 'react-router-dom'
import {Router} from '../Router'

import {ErrorPage, HomePage, TasksPage} from '../../pages'
import {DefaultLayout} from '../../layouts/DefaultLayout'

import './App.css'

function App() {
    const routes = [
        {
            name: '/',
            element: <DefaultLayout/>,
            routePaths: [
                {
                    name: '/',
                    element: <HomePage/>,
                },
                {
                    name: '/my-tasks',
                    element: <TasksPage/>,
                },
                {
                    name: '*',
                    element: <ErrorPage statusCode={404}/>,
                },
            ],
        },
    ]

    return (
        <BrowserRouter>
            <Router mainRoutes={routes}/>
        </BrowserRouter>
    )
}

export {App}
