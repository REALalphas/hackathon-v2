import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { useNavigate } from '@builder.io/qwik-city'
import SpeedTest from '@cloudflare/speedtest'

import { Button } from '~/components/button/Button'
import { Counter } from '~/components/counter/Counter'
import { Header } from '~/components/header/Header'
import { SvgArrowDown, SvgArrowUp } from '~/components/svg'

import s from '../Speed.module.css'

export default component$(() => {
	const nav = useNavigate()
	useVisibleTask$(() => {
		nav('/speed/')
	})

	return <></>
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
