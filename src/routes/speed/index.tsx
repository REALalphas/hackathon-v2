import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Header } from '~/components/header/Header'
import { Nav } from '~/components/nav/Nav'
import { SvgArrowDown, SvgArrowUp } from '~/components/svg'

import s from './Speed.module.css'

export default component$(() => {
	return (
		<>
			<Header subheading='Измерение скорости' />
			<div class={s.middle}>
				<div class={s.column}>
					<SvgArrowDown />
					<div class={s.text}>
						<h3 class={s.title}>
							Загрузка <span>Мбит/с</span>
						</h3>
						<div class={s.num}>889</div>
					</div>
				</div>
				<div class={s.column}>
					<SvgArrowUp />
					<div class={s.text}>
						<h3 class={s.title}>
							Отдача <span>Мбит/с</span>
						</h3>
						<div class={s.num}>432</div>
					</div>
				</div>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Скорость',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
