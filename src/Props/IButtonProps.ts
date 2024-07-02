import IElementProps from './IComponentProps'

type variant = 'primary' | 'secondary'

export interface IButtonProps extends IElementProps {
	type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
	variant: variant
}
