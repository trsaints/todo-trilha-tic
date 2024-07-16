import {BrowserRouter} from 'react-router-dom'
import {Router} from '../Router'

import {ErrorPage, HomePage, TasksPage} from '../../pages'
import {DefaultLayout} from '../../layouts/DefaultLayout'

import './App.css'
import {MainRoute} from '../../types'
import {TasksPageContextProvider} from '../../context/providers/TasksPageContextProvider'

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
                    element: (
                        <TasksPageContextProvider>
                            <TasksPage/>
                        </TasksPageContextProvider>)
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
