import { component$, QRL, Slot } from '@builder.io/qwik'

import s from './Button.module.css'

interface ButtonProps {
	color?: string
	isMain?: boolean
	onClick?: QRL<() => void>
}

export const Button = component$<ButtonProps>(({ color, isMain, onClick }) => {
	return (
		<div class={isMain && s.main}>
			<button class={s.btn} style={{ background: color }} onClick$={onClick}>
				<Slot />
			</button>
		</div>
	)
})
