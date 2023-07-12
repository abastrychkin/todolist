/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch(`http://localhost:3000/todolist-server/all`);
    const tasks = await res.json();

    return { tasks };
}