import { serverInfo } from '/src/config/serverInfo';

/** @type {import('./$types').PageLoad} */
export async function load() {
    try {
        const res = await fetch(`${serverInfo.url}/todolist-server/all`);
        const tasks = await res.json();

        return { tasks };
    } catch (error) {
        console.log('There was an error', error);
        alert("Ошибка (дополнительная информация в консоли)")
    }
}