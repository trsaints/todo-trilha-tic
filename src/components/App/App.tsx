import {BrowserRouter} from 'react-router-dom'
import {Router} from '../Router'

import {ErrorPage, HomePage, TasksPage} from '../../pages'
import {DefaultLayout} from '../../layouts/DefaultLayout'

import './App.css'
import {MainRoute} from '../../types'

function App() {
    const routes: MainRoute[] = [
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
