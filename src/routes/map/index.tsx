import { $, component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import * as maptilersdk from '@maptiler/sdk'

import { Button } from '~/components/button/Button'
import { Header } from '~/components/header/Header'
import { SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '~/components/svg'

import s from './Map.module.css'

import '@maptiler/sdk/dist/maptiler-sdk.css'

export default component$(() => {
	useVisibleTask$(() => {
		let userLocation = new maptilersdk.LngLat(36.262724, 54.517791)
		maptilersdk.config.apiKey = 'U5L9BK8UnH7C2pZKrTlG'
		const map = new maptilersdk.Map({
			container: 'map',
			style: 'streets-v2-dark',
			center: [36.2754, 54.5293],
			zoom: 10
		})

		// Load user location
		if ('geolocation' in navigator) {
			//Try to get location
			navigator.geolocation.getCurrentPosition(function (position) {
				userLocation = new maptilersdk.LngLat(
					position.coords.longitude,
					position.coords.latitude
				)
			})
		}
		new maptilersdk.Marker().setLngLat(userLocation).addTo(map)
	})
	const handleButtonClick = $(() => {
		const geoButton = document.querySelector(
			'#map > div.maplibregl-control-container > div.maplibregl-ctrl-top-right > div:nth-child(2) > button > span'
		)
		const buttonElement: HTMLButtonElement = geoButton as HTMLButtonElement
		buttonElement.click()
	})
	return (
		<>
			<div id='map' class={s.map}></div>
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
			<Button onClick={handleButtonClick} isMain color='#279AED'>
				<SvgLocation />
				Где я?
			</Button>
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
