<script>
	import { page } from '$app/stores';

	let menuItems = [
		{ href: '/todolist', title: 'Список задач' },
		{ href: '/todolist/add', title: 'Добавить задачу' }
	];

	let current = $page.url.pathname;
</script>

<nav>
	{#each menuItems as item}
		<a
			class={current === item.href ? 'active' : ''}
			on:click={() => (current = item.href)}
			href={item.href}
			aria-current={current === item.href}>{item.title}</a
		>
	{/each}
</nav>

<slot />

<style>
	:global(body) {
		font-size: 100%;
		font-family: Helvetica;
	}

	nav {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		border: 1px solid #e7e7e7;
		background-color: #f3f3f3;
	}

	a {
		float: left;
	}

	a {
		display: block;
		color: #666;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	a:hover:not(.active) {
		background-color: #4e5066;
		color: #d5dde5;
	}

	a.active {
		color: white;
		background-color: #1b1e24;
	}
</style>
