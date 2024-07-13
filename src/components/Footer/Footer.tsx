import { IFooter } from './IFooter'

import './Footer.css'

function Footer(props: IFooter) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="footer">
			<p>
				Projeto <span lang="en">Todo List</span> - {currentYear}
			</p>

			<p>Feito por {props.author}. Todos os direitos reservados.</p>
		</footer>
	)
}

export {Footer}
