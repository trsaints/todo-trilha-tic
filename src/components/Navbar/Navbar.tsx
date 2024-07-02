import { Link } from 'react-router-dom'
import { INavbarProps } from '../../Props/INavbarProps'

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
