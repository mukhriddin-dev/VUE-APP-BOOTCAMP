import axios from "@/service/axios.js";
let token = window.localStorage.getItem('token');

export const post = {
    state: () => (
        {authMessage: ""}
    ),

    mutations: {

        SET_MESSAGES(state, payload) {
            state.authMessage = payload;
            console.log(token)
        }

    },

    actions: {
        ADD_POST: async ({
            commit
        }, payload) => {
            try {
                console.log(token)
                const response = await axios.post("/post", payload, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                console.log(response)
                commit("SET_MESSAGES", "");

                return response;

            } catch (err) {
                console.log(err);
                commit("SET_MESSAGES", err.response.data.message);

            }
        }
    }
};
