import { component$ } from '@builder.io/qwik'

import { SvgBolt, SvgChartBar } from '~/components/svg'

import s from './Counter.module.css'

export const Counter = component$(() => {
	return (
		<div class={s.counter}>
			<div class={s.column}>
				<SvgChartBar />
				Мощность <span>-77 Дб</span>
			</div>
			<div class={s.column}>
				<SvgBolt />
				Задержка <span>~3 ms</span>
			</div>
		</div>
	)
})
