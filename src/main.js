import App from './App.svelte';
console.log('main.js!!')

const app = new App({
	target: document.body,
	props: {
		name: 'Dekay!!',
		age:31,
	}
})

export default app;