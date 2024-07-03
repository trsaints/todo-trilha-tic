type variant = 'primary' | 'secondary'

export interface IButton extends React.ComponentProps<'button'> {
	variant: variant
}
