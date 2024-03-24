import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { useNavigate } from '@builder.io/qwik-city'

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
