import { $, component$, useOnDocument } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import * as maptilersdk from '@maptiler/sdk'

import { Header } from '~/components/header/Header'
import { SvgArrowsUpDownBlue, SvgChartBar } from '~/components/svg'

import s from './Map.module.css'

import '@maptiler/sdk/dist/maptiler-sdk.css'

export default component$(() => {
	useOnDocument(
		'load',
		$(() => {
			maptilersdk.config.apiKey = 'U5L9BK8UnH7C2pZKrTlG'
			const map = new maptilersdk.Map({
				container: 'map',
				style: 'streets-v2-dark',
				center: [36.2754, 54.5293],
				zoom: 10
			})
		})
	)
	return (
		<>
			<Header subheading='Карта качества связи' />
			<div class={s.top}>
				<div class={s.column}>
					<SvgChartBar />
					<div class={s.text}>
						<h3 class={s.title}>
							Мощность <span>-77 Дб</span>
						</h3>
					</div>
				</div>
				<div class={s.column}>
					<SvgArrowsUpDownBlue />
					<div class={s.text}>
						<h3 class={s.title}>
							До вышки <span>100 м</span>
						</h3>
					</div>
				</div>
			</div>
			<div id='map' class={s.map}></div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Карта',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
