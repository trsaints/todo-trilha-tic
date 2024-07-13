import {ErrorMessages, StatusCodes} from './constants'

import {Block, Heading} from '../../components'

import {IErrorPage} from './IErrorPage'

function ErrorPage(props: IErrorPage) {
    let errorMessage = ''

    switch (props.statusCode) {
        case StatusCodes.NOT_FOUND:
            errorMessage = ErrorMessages.NOT_FOUND
            break

        case StatusCodes.INTERNAL_SERVER_ERROR:
            errorMessage = ErrorMessages.INTERNAL_SERVER_ERROR
            break

        default:
            errorMessage = ErrorMessages.INTERNAL_SERVER_ERROR
            break
    }

    return (
        <Block name='not-found'>
            <Heading>oops... algou deu errado.</Heading>
            <p>{errorMessage}</p>
        </Block>
    )
}

export {ErrorPage}
