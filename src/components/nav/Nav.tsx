import { component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'

import { SvgGeodata, SvgMap, SvgSpeed } from '~/components/svg'

import s from './Nav.module.css'


export const Nav = component$(() => {
	const loc = useLocation()
	const locName = loc.url.pathname.split('/')[1]

	return (
		<nav class={s.nav}>
			<Link href='/speed' class={[s.link, locName == 'speed' && s.active]} data-type='speed'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgSpeed />
					Скорость
				</div>
			</Link>

			<Link href='/map' class={[s.link, locName == 'map' && s.active]} data-type='map'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgMap />
					Карта
				</div>
			</Link>

			<Link href='/geodata' class={[s.link, locName == 'geodata' && s.active]} data-type='geodata'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgGeodata />
					Геоданные
				</div>
			</Link>
		</nav>
	)
})
