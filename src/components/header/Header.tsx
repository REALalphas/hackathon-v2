import { component$ } from '@builder.io/qwik'

import s from './Header.module.css'

interface HeaderProps {
	subheading: string
}

export const Header = component$<HeaderProps>(props => {
	return (
		<header class={s.header}>
			<h1 class={s.heading}>Алё, Калуга!</h1>
			<div class={s.subheading}>{props.subheading}</div>
		</header>
	)
})
