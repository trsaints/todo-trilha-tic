import {BrowserRouter} from 'react-router-dom'
import {Router} from '../Router'

import {ErrorPage, Home, MyTasks} from '../../pages'
import {DefaultLayout} from '../../layouts/Default'

import './App.css'

function App() {
    const routes = [
        {
            name: '/',
            element: <DefaultLayout/>,
            routePaths: [
                {
                    name: '/',
                    element: <Home/>,
                },
                {
                    name: '/my-tasks',
                    element: <MyTasks/>,
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
