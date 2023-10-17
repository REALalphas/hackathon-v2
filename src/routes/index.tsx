import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Header } from '~/components/header/Header'

export default component$(() => {
	return (
		<>
			<Header subheading='Добро пожаловать' />
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
