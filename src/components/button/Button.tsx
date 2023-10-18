import { component$, Slot } from '@builder.io/qwik'

import s from './Button.module.css'

interface ButtonProps {
	color?: string,
	isMain?: boolean
}

export const Button = component$<ButtonProps>(({ color, isMain }) => {
	return (
		<div class={isMain && s.main}>
			<button class={s.btn} style={{ background: color }}>
				<Slot />
			</button>
		</div>
	)
})
