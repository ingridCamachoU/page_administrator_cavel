import { endPoints } from './endPoints/endPoints';
import { alert } from '../utils/alerts';
import FormData from 'form-data';
import { helpFetch } from '../utils/helpFetch';

const id_restaurant = 1;
//Add Toppins//
const addToppins = (body, loadData) => {
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
    const response =  response => response.json();
    const alerts = alert('Toppin Agregado', 'success');
    helpFetch(endPoints.toppins.getToppins(id_restaurant), config, alerts, response, loadData);
};

//Delete Toppins//
const deleteToppin = (id, loadData) => {
    const config = {
        method: 'DELETE',
        redirect: 'follow'
    };    
    const response =  response => response.text();
    const alerts = alert('El producto ha sido eliminado', 'success');
    helpFetch(endPoints.toppins.deleteToppins(id), config, alerts, response, loadData);
};

//Update Toppins//
const updateToppin = (id, body, loadData, toppin) => {

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

    const arrayFormData= [];
    data.forEach((value, key) => {
        arrayFormData.push(`${key}: ${value}`);
    });

    if (arrayFormData.length === 0){
        alert('Toppin editado con éxito', 'success');
    }else{
        const config = {
            method: 'PATCH',
            maxBodyLength: Infinity,
            headers: {
                ...data
            },
            body: data,
        };

        const response =  response => response.json();
        const alerts = alert('Toppin editado con éxito', 'success');
        helpFetch(endPoints.toppins.updateToppins(id), config, alerts, response, loadData);
    }
};

//Actived or Disabled Toppin//
const activedOrDisabledToppin = (toppin, loadData) => {

    const data = JSON.stringify({
        "toppings": `${toppin.id}`,
    });

    const config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        headers: {
            'Content-Type': 'application/json'
        },   
        body : data
    };  
    const response =  response => response.text();
    const alerts = () => {
        if(toppin?.active === 0){
            alert('Toppin activo', 'success');
        }else{
            alert('Toppin inactivo', 'success');
        }
    };
    helpFetch(endPoints.toppins.getToppins(id_restaurant), config, alerts(), response, loadData);
};

export { addToppins, deleteToppin, updateToppin, activedOrDisabledToppin };