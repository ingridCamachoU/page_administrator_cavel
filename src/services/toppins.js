import { endPoints } from './endPoints/endPoints';
import { alert } from '../utils/alerts';
import FormData from 'form-data';

const id_restaurant = 1;
//Add Toppins//
const addToppins = (body, load_data) => {
    const data = new FormData();
    data.append('name', body.name);
    data.append('description', body.description);
    data.append('price', body.price);
    data.append('image', body.images);
    data.append('restaurant_id', '1');
    const config = {
        method: 'POST',
        maxBodyLength: Infinity,
        headers: {
            ...data
        },
        body: data,
    };
    fetch(endPoints.toppins.getToppins(id_restaurant), config)
        .then(response => response.json())
        .then(result => {   
            console.log(result);
            alert('Toppin Agregado', 'success');
            load_data();
        })
        .catch(error => {
            console.log('error', error);
            const errorCodigo= (error.response.data.code);
            alert(errorCodigo, 'error');
        });
};

//Delete Toppins//
const deleteToppin = (id, load_data) => {
    const config = {
        method: 'DELETE',
        redirect: 'follow'
    };      
    fetch(endPoints.toppins.deleteToppins(id), config)
        .then(response => response.text())
        .then(result => {   
            console.log(result);
            alert('El producto ha sido eliminado.', 'success');
            load_data();
        })
        .catch(error => {
            console.log('error', error);
            const errorCodigo= (error.response.data.code);
            alert(errorCodigo, 'error');
        });
};

//Update Toppins//
const updateToppin = (id, body, load_data, toppin) => {

    const data = new FormData();
    if(body.name !== toppin.name){
        data.append('name', body.name);
    }if(body.description !== toppin.description){
        data.append('description', body.description);
    }if(body.price !== toppin.price){
        data.append('price', body.price);
    }if(body.images !== toppin.image_url){
        data.append('image', body.images);
    }

    const config = {
        method: 'PATCH',
        maxBodyLength: Infinity,
        headers: {
            ...data
        },
        body: data,
    };
    fetch(endPoints.toppins.updateToppins(id), config)
        .then(response => response.json())
        .then(result => {   
            console.log(result);
            alert('Toppin editado con éxito', 'success');
            load_data();
        })
        .catch(error => {
            console.log('error', error);
            const errorCodigo= (error.response.data.code);
            alert(errorCodigo, 'error');
        });
};

//Actived or Disabled Toppin//
const activedOrDisabledToppin = (toppin, load_data) => {

    const data = JSON.stringify({
        "toppings": `${toppin.id}`,
    });

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        maxBodyLength: Infinity,
        body : data
    };  
    fetch(endPoints.toppins.getToppins(id_restaurant), config)
        .then(response => (response.text()))
        .then(result => {   
            console.log(result);
            if(toppin?.active === 0){
                alert('Toppin activo', 'success');
            }else{
                alert('Toppin inactivo', 'success');
            }
            
            load_data();
        })
        .catch(error => {
            console.log('error', error);
            const errorCodigo= (error.response.data.code);
            alert(errorCodigo, 'error');
        });
};

export { addToppins, deleteToppin, updateToppin, activedOrDisabledToppin };