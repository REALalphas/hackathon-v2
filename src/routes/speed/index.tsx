import { $, component$, useSignal } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import SpeedTest from '@cloudflare/speedtest'

import { Button } from '~/components/button/Button'
import { Counter } from '~/components/counter/Counter'
import { Header } from '~/components/header/Header'
import { SvgArrowDown, SvgArrowUp } from '~/components/svg'

import s from './Speed.module.css'

export default component$(() => {
	const mainButtonName = useSignal('Начать')

	const downloadSpeed = useSignal(0)
	const uploadSpeed = useSignal(0)
	const downloadSpeedOld = useSignal(0)
	const uploadSpeedOld = useSignal(0)

	const Ping = useSignal(0)
	const Jitter = useSignal(0)

	const range = (
		value: number,
		low1: number,
		high1: number,
		low2: number,
		high2: number
	): number => {
		return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
	}
	const lerp = $((start: number, end: number, time: number): number => {
		return start + time * (end - start)
	})

	const mainButtonFunc = $(() => {
		mainButtonName.value = 'Остановить'
		const speedTest = new SpeedTest()
		setInterval(async () => {
			const cfJitt = speedTest.results.getUnloadedJitter()
			const cfPing = speedTest.results.getUnloadedLatency()
			const cfDn = speedTest.results.getDownloadBandwidth()
			const cfUp = speedTest.results.getUploadBandwidth()
			if (cfPing) {
				Ping.value = Math.round(cfPing * 10) / 10
			}
			if (cfJitt) {
				Jitter.value = Math.round(cfJitt * 10) / 10
			}
			if (cfDn) {
				downloadSpeed.value =
					Math.round(
						(await lerp(
							downloadSpeedOld.value,
							Math.round(cfDn / 100000) / 10,
							0.01
						)) * 100
					) / 100
				downloadSpeedOld.value = downloadSpeed.value
			}
			if (cfUp) {
				uploadSpeed.value =
					Math.round(
						(await lerp(
							uploadSpeedOld.value,
							Math.round(cfUp / 100000) / 10,
							0.01
						)) * 100
					) / 100
				uploadSpeedOld.value = uploadSpeed.value
			}
		}, 22)
	})

	return (
		<>
			<Header subheading='Измерение скорости' />
			<div class={s.top}>
				<div class={s.column}>
					<SvgArrowDown />
					<div class={s.text}>
						<h3 class={s.title}>
							Загрузка <span>Мбит/с</span>
						</h3>
						<div class={s.num}>{downloadSpeed.value}</div>
					</div>
				</div>
				<div class={s.column}>
					<SvgArrowUp />
					<div class={s.text}>
						<h3 class={s.title}>
							Отдача <span>Мбит/с</span>
						</h3>
						<div class={s.num}>{uploadSpeed.value}</div>
					</div>
				</div>
			</div>
			<div class={s.speed}>
				<Counter jitter={Jitter.value} ping={Ping.value} />
			</div>
			<div class={s.speedometer}>
				<div
					class={s.gauge}
					style={`--ang: ${range(
						(uploadSpeed.value == 0 && downloadSpeed.value) ||
							uploadSpeed.value,
						0,
						100,
						0,
						270
					)}deg;`}
				>
					<div class={s.circle}>
						<div class={s.num}>
							{(uploadSpeed.value == 0 && downloadSpeed.value) ||
								uploadSpeed.value}
						</div>
						<div class={s.name}>
							{(uploadSpeed.value == 0 && 'Загрузка') || 'Отдача'}
						</div>
					</div>
				</div>
			</div>
			<Button isMain color='#545454' onClick={mainButtonFunc}>
				{mainButtonName}
			</Button>
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
