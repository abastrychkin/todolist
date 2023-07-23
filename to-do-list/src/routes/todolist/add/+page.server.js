/** @type {import('./$types').Actions} */
export const actions = {
    add: async({ request }) => {
        const data = await request.formData();


        let response;

        try {
            response = await fetch('http://localhost:3000/todolist-server/add', {
                method: 'POST',
                body: data
            });
            return { success: true };
        } catch (error) {
            console.log('There was an error', error);
        }


    }
};