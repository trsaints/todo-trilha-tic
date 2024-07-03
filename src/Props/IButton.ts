import { IComponent } from './IComponent'

type variant = 'primary' | 'secondary'

export interface IButton extends IComponent {
	type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
	variant: variant
}
