import { component$ } from '@builder.io/qwik'

import s from './Counter.module.css'

interface CounterProps {}

export const Counter = component$<CounterProps>(props => {
	return (
		<div class={s.middle}>
			<div class={s.column}></div>
			<div class={s.column}></div>
		</div>
	)
})
