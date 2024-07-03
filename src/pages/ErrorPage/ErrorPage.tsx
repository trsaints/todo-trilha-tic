import { IErrorPage } from './IErrorPage'
import { Block } from '../../components/Block'
import { Heading } from '../../components/Heading'
import { ErrorMessages, StatusCodes } from './constants'

function Root(props: IErrorPage) {
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
		<Block.Root name="not-found">
			<Heading.Root>oops... algou deu errado.</Heading.Root>
			<p>{errorMessage}</p>
		</Block.Root>
	)
}

export const ErrorPage = {
	Root,
}
