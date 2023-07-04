<script>
	let current = 'todolist';
</script>

<nav>
	<a
		class={current === 'todolist' ? 'active' : ''}
		on:click={() => (current = 'todolist')}
		href="/todolist">Список задач</a
	>
	<a
		class={current === 'add' ? 'active' : ''}
		on:click={() => (current = 'add')}
		href="/todolist/add">Добавить задачу</a
	>
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
