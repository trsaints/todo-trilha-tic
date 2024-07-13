import {Link} from 'react-router-dom'

import {INavbar} from './INavbar'
import './Navbar.css'

function Navbar(props: INavbar) {
    const {block, placeholders} = props
    const blockElement              = `${block}__nav`
    
    return (
        <nav className={blockElement}>
            {placeholders.map((placeholder, index) => (
                <Link key={`${placeholder}-${index}`} to={props.urls[index]}>
                    {placeholder}
                </Link>
            ))}
        </nav>
    )
}

export {Navbar}
