import Slides from './slides.svelte'
import '@styles/tailwind.css'

const app = new Slides({
	target: document.getElementById('app') as HTMLElement,
})

export default app
