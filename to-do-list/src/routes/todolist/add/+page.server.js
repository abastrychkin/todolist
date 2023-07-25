import { serverInfo } from '/src/config/serverInfo';

/** @type {import('./$types').Actions} */
export const actions = {
    add: async({ request }) => {
        const data = await request.formData();


        let response;

        try {
            response = await fetch(`${serverInfo.url}/todolist-server/add`, {
                method: 'POST',
                body: data
            });
            return { success: true };
        } catch (error) {
            console.log('There was an error', error);
        }


    }
};