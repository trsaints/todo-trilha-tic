import IFooterProps from '../../../Props/IFooterProps'

import './Footer.css'

function Root(props: IFooterProps) {
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

export const Footer = {
    Root,
}
