import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Link } from '@builder.io/qwik-city'
import { Nav } from '~/components/nav/Nav'

export default component$(() => {
	return (
		<>
			<h1>Geodata</h1>
			<Nav />
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
