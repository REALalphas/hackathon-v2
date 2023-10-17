import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

import { SvgGeodata, SvgMap, SvgSpeed } from '~/components/svg'

import s from './Nav.module.css'

interface NavSelectProps {
	selected?: string;
}

export const Nav = component$<NavSelectProps>(({ selected }) => {
	return (
		<nav class={s.nav}>
			<Link href='/speed' class={[s.link, selected == 'speed' && s.active]} data-type='speed'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgSpeed />
					Скорость
				</div>
			</Link>

			<Link href='/map' class={[s.link, selected == 'map' && s.active]} data-type='map'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgMap />
					Карта
				</div>
			</Link>

			<Link href='/geodata' class={[s.link, selected == 'geodata' && s.active]} data-type='geodata'>
				<div class={s.bg}></div>
				<div class={s.content}>
					<SvgGeodata />
					Геоданные
				</div>
			</Link>
		</nav>
	)
})
