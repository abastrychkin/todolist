/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        const res = await fetch(`http://localhost:3000/todolist-server/all`);
        const tasks = await res.json();

        return { tasks };
    } catch (error) {
        console.log('There was an error', error);
        alert("Ошибка (дополнительная информация в консоли)")
    }
}