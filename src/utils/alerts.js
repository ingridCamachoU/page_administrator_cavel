import Swal from 'sweetalert2';

export const alert = (title, icon) => {
    Swal.fire({
        text: title,
        icon: icon,
        confirmButtonText: 'Ok'
    });
};

export const Error = (error) => {
    if (error.code === 'ERR_BAD_REQUEST'){
        alert('Error 404, Página no encontrada!', 'error');
    }
    if (error.code === 'ERR_NETWORK'){
        alert('Algo salió mal, pero no te preocupes, no es tu culpa. Vamos a intentarlo de nuevo.!', 'warning');
    }             
};