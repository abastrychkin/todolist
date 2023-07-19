/** @type {import('./$types').Actions} */
export const actions = {
    add: async ({request }) => {
        const data = await request.formData();

        let response = await fetch('http://localhost:3000/todolist-server/add', {
            method: 'POST',
            body: data
        });

        return { success: true };
    }
};