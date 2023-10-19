import { endPoints } from './endPoints/endPoints';
import { alert } from '../utils/alerts';
import FormData from 'form-data';
import { helpFetch } from '../utils/helpFetch';

const id_restaurant = 1;
//Add Product//
const addProduct = (body, loadData) => {
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
    const alerts = alert('Producto Agregado', 'success');
    helpFetch(endPoints.product.getProduct(id_restaurant), config, alerts, response, loadData);
};

//Delete Product//
const deleteProduct = (id, loadData) => {
    const config = {
        method: 'DELETE',
        redirect: 'follow'
    };    
    const response =  response => response.text();
    const alerts = alert('El producto ha sido eliminado', 'success');
    helpFetch(endPoints.product.deleteProduct(id), config, alerts, response, loadData);
};

//Update Product//
const updateProduct = (id, body, loadData, product) => {

    const data = new FormData();
    if(body.name !== product.name){
        data.append('name', body.name);
    }if(body.description !== product.description){
        data.append('description', body.description);
    }if(body.price !== product.price){
        data.append('price', body.price);
    }if(body.images !== product.image_url){
        data.append('image', body.images);
    }

    const arrayFormData= [];
    data.forEach((value, key) => {
        arrayFormData.push(`${key}: ${value}`);
    });

    if (arrayFormData.length === 0){
        alert('Producto editado con éxito', 'success');
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
        const alerts = alert('Producto editado con éxito', 'success');
        helpFetch(endPoints.product.updateProduct(id), config, alerts, response, loadData);
    }
};

//Actived or Disabled Product//
const activedOrDisabledProduct = (product, loadData) => {

    const data = JSON.stringify({
        "products": `${product.id}`,
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
        if(product?.active === 0){
            alert('Producto activo', 'success');
        }else{
            alert('Producto inactivo', 'success');
        }
    };
    helpFetch(endPoints.product.getProduct(id_restaurant), config, alerts(), response, loadData);
};

export { addProduct, deleteProduct, updateProduct, activedOrDisabledProduct};