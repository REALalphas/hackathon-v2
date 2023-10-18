import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Button } from '~/components/button/Button'
import { Header } from '~/components/header/Header'
import {
	SvgArrowsUpDownBlue,
	SvgArrowsUpDownOrange,
	SvgChartBar,
	SvgDownload,
	SvgUpdate
} from '~/components/svg'

import s from './Geodata.module.css'

export default component$(() => {
	return (
		<>
			<Header subheading='Геоданные и измерения' />
			<div class={s.geodata}>
				<h2 class={s.heading}>
					GeoData <span>RFC 5870</span>
				</h2>
				<a
					href='geo:54.8143,36.2911?z=14'
					target='_blank'
					rel='noopener noreferrer'
					class={s.coords}
				>
					geo:54.8143,36.2911?z=14
				</a>
				<div class={s.card_block}>
					<div class={s.card}>
						<SvgChartBar />
						<div class={s.text}>
							Мощность <span>-77 Дб</span>
						</div>
					</div>
					<div class={s.card}>
						<SvgArrowsUpDownOrange />
						<div class={s.text}>
							Задержка <span>~3 ms</span>
						</div>
					</div>
					<div class={s.card}>
						<SvgArrowsUpDownBlue />
						<div class={s.text}>
							До вышки <span>100 м</span>
						</div>
					</div>
				</div>
				<div class={s.bottom}>
					<h2 class={s.heading}>
						GeoAtl <span>CC0</span>
					</h2>
					<div class={s.scale}>
						<h3>Масштаб</h3>
						<div class={s.badge}>
							<span class={s.left}>1:</span>
							<span class={s.right}>21500</span>
						</div>
					</div>
					<Button color='#786c5a'>
						<SvgDownload />
						Скачать архив
					</Button>
				</div>

				<Button isMain color='#B462F5'>
					<SvgUpdate />
					Обновить
				</Button>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Геоданные',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
