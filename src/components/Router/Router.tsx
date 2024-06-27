import { Routes, Route } from 'react-router-dom'

interface IRootProps {
    paths: string[]
    elements: JSX.Element[]
}

function Root(props: IRootProps) {
    return (
        <Routes>
            {props.paths.map((path, index) => (
                <Route
                    key={`${path}-${index}`}
                    path={path}
                    element={props.elements[index]}
                />
            ))}
        </Routes>
    )
}

export const Router = {
    Root,
}
