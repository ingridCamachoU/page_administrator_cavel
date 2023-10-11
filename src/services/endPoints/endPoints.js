const URL = import.meta.env.VITE_BACKEND_URL;

export const endPoints = {
    toppins: {
        getToppins: (id) => `${URL}?restaurant_id=${id}`,
        updateToppins: (id) => `${URL}?id=${id}`,
        deleteToppins: (id) => `${URL}?id=${id}`
    }
};
