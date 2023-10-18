import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'

import logo from '../components/svg/logo.png'
import { Button } from '~/components/button/Button'
import { Header } from '~/components/header/Header'

export default component$(() => {
	return (
		<>
			<Header subheading='Добро пожаловать' />
			<div class='wrapper'>
				<img src={logo} alt='logo' class='logo' />
				<Link href='/speed'>
					<Button
						isMain
						color='linear-gradient(258deg, #00A3FF 0%, #B75AFF 100%'
					>
						Начать
					</Button>
				</Link>
			</div>
		</>
	)
})

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
