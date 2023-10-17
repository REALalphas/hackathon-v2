import { component$ } from '@builder.io/qwik'
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister
} from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import { Nav } from '~/components/nav/Nav'

import './global.css'
import './reset.css'

export interface QwikCityProps {
	viewTransition: true
}

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charSet='utf-8' />
				<link rel='manifest' href='/manifest.json' />
				<RouterHead />
			</head>
			<body lang='en'>
				<main>
					<RouterOutlet />
				</main>
				<Nav />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	)
})
