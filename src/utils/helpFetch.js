
import { alert } from "./alerts";

export const helpFetch =  async (url, config, alerts, response, load_data) => {
    await fetch(url, config)
        .then(response)
        .then(result => {   
            console.log(result);
            load_data();
            alerts;  
        })
        .catch(error => {
            console.log('error', error);
            const errorCodigo= (error.response);
            alert(errorCodigo, 'error');
        });
};