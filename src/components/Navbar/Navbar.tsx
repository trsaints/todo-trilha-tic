import { Link } from 'react-router-dom'

interface INavbarProps {
    placeholders: string[]
    urls: string[]
}

function Root(props: INavbarProps) {
    return (
        <nav>
            {props.placeholders.map((placeholder, index) => (
                <Link key={`${placeholder}-${index}`} to={props.urls[index]}>
                    {placeholder}
                </Link>
            ))}
        </nav>
    )
}

export const Navbar = {
    Root,
}