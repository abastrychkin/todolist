/** @type {import('./$types').PageLoad} */
export function load() {
    let tasks = [
		{
			id: 1,
			title: 'ДЗ Математика',
			description: 'Сделать ДЗ по математике, пример №8',
			done: false
		},
		{
			id: 2,
			title: 'ДЗ Русский язык',
			description:
				'Сделать ДЗ по русскому языку, прочитать параграф про сложносочинённые предложения, выполнить упражнение №234',
			done: false
		}
	];

    return {
        tasks
    };
}