import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import { Header } from '~/components/header/Header'

export default component$(() => {
	return (
		<>
			<Header subheading='Геоданные и измерения' />
		</>
	)
})

export const head: DocumentHead = {
	title: 'Геоданные',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description'
		}
	]
}
