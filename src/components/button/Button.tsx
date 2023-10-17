import { component$, Slot } from '@builder.io/qwik'

import s from './Button.module.css'

interface ButtonProps {
	color?: string
}

export const Button = component$<ButtonProps>(({ color }) => {
	return (
		<button class={s.btn} style={{ background: color }}>
			<Slot />
		</button>
	)
})
