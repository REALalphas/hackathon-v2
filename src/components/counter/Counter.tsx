import { component$ } from '@builder.io/qwik'

import { SvgArrowsUpDownBlue, SvgBolt } from '~/components/svg'

import s from './Counter.module.css'

interface CounterProps {
	ping?: number
	jitter?: number
}

export const Counter = component$<CounterProps>(({ ping, jitter }) => {
	return (
		<div class={s.counter}>
			<div class={s.column}>
				<SvgArrowsUpDownBlue />
				Разница <span>~{jitter} мс</span>
			</div>
			<div class={s.column}>
				<SvgBolt />
				Задержка <span>{ping} мс</span>
			</div>
		</div>
	)
})
