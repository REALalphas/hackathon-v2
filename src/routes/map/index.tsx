import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'

import { Header } from '~/components/header/Header'

export default component$(() => {
	return (
		<>
			<Header subheading='Карта качества связи' />
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
