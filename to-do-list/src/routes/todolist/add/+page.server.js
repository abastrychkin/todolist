import { serverInfo } from '/src/config/serverInfo';
import { redirect } from "@sveltejs/kit";

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
        } catch (error) {
            console.log('There was an error', error);
        }

        if (response.ok) {
            throw redirect(303, "/todolist");
        }
    }
};