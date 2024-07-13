import {Link} from 'react-router-dom'

import {INavbar} from './INavbar'

function Navbar(props: INavbar) {
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

export {Navbar}
