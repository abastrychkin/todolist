<form action="/TODO" method="post">
	<div>
		<label for="title">Заголовок: </label>
		<input type="text" id="title" name="title" />
	</div>
	<div>
		<label for="description">Описание:</label>
		<textarea id="description" name="description" />
	</div>
	<div>
		<button type="submit">Добоавить</button>
	</div>
</form>

<style>
	form {
		background: white;
		border-radius: 3px;
		border-collapse: collapse;
		height: 320px;
		margin: auto;
		max-width: 600px;
		padding: 5px;
		width: 100%;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		animation: float 5s infinite;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: stretch;
		align-content: stretch;
	}

	form div {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	form div > * {
		margin: 20px;
	}

	input {
		resize: none;
		flex: 3 1;
	}

	textarea {
		height: 100px;

		resize: none;
		flex: 3 1;
	}

	input,
	textarea {
		font-size: 100%;
		font-family: Helvetica;
	}

	button {
		display: block;
		color: #666;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		align-self: center;
	}

	button:hover:not(:active) {
		background-color: #4e5066;
		color: #d5dde5;
	}

	button:active {
		color: white;
		background-color: #1b1e24;
	}
</style>
