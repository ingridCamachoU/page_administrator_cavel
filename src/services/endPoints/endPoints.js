const URL = import.meta.env.VITE_BACKEND_URL;

export const endPoints = {
    toppins: {
        getToppins: (id) => `${URL}?restaurant_id=${id}`,
        updateToppins: (id) => `${URL}?id=${id}`,
        deleteToppins: (id) => `${URL}?id=${id}`
    },
    product: {
        getProduct: (id) => `${URL}?restaurant_id=${id}`,
        updateProduct: (id) => `${URL}?id=${id}`,
        deleteProduct: (id) => `${URL}?id=${id}`
    }
};
