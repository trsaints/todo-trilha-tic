import IElementProps from './IElementProps'

type variant = 'primary' | 'secondary'

export default interface IButtonProps extends IElementProps {
	type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
	variant: variant
}