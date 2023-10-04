import { useContext } from "react";
import { DarkMode } from '../../context/DarkMode';
import { PencilIcon,EyeIcon,TrashIcon } from '@heroicons/react/24/solid';

const dataProducts = [
    {
        'id': '01',
        'name': 'Saray Perez',
        'cargo': 'Mesera',
        'celular': 303489988,
        'direccion': 'cll 5-# 12-90 brr el salado',
        'contacto_emergencia': 'Luis Sanchez 312 348 908',
    },
    {
        'id': '02',
        'name': 'Saray Perez',
        'cargo': 'Cajer',
        'celular': 303489988,
        'direccion': 'cll 5-# 12-90 brr el salado',
        'contacto_emergencia': 'Luis Sanchez 312 348 908',
    },
    {
        'id': '03',
        'name': 'Saray Perez',
        'cargo': 'Cheff',
        'celular': 303489988,
        'direccion': 'cll 5-# 12-90 brr el salado',
        'contacto_emergencia': 'Luis Sanchez 312 348 908',
    },
];

const Table_workers = () => {

    const {darkMode} = useContext(DarkMode);

    const handleEditProduct = (product) => {
        console.log('editado:'+ product);
    };

    const handleDetailsProduct = (product) => {
        console.log('detalles:'+ product);
    };

    const handleDeleteProduct = (product) => {  
        console.log('ha sido eliminado:'+ product);
    };
    return (
        <>
            <div className="overflow-x-auto w-full max-w-screen-xl rounded-lg shadow-md mt-4">
                <table className="w-full text-center text-s font-light pb-4 mb-4 " >
                    <thead >
                        <tr className='bg-gray-500 text-white '>
                            <th className='px-2 py-2 font-medium'>NOMBRE</th>
                            <th className='px-2 py-2 font-medium'>CARGO</th>
                            <th className='px-2 py-2 font-medium'>CELULAR</th>
                            <th className='px-2 py-2 font-medium'>DIRECCIÓN</th>
                            <th className='px-2 py-2 font-medium'>CONTACTO EMERGENCIA</th>
                            <th className='px-2 py-2 font-medium'>ACCIONES</th>
                        </tr>
                    </thead>

                    <tbody className={`${darkMode ? 'bg-[#212130] text-white' : 'bg-white text-black'}`}>
                        {   
                            dataProducts.length === 0 ? <tr className='border-b text-center w-full'><td colSpan="10" className='px-4 py-2 text-center'>No hay datos</td></tr> : (dataProducts.map)(product => (
                                <tr key={product.id} className='border-b w-full'>
                                    <td className='py-2'>{product.name}</td>
                                    <td className='py-2'>{product.cargo}</td>
                                    <td className=' py-2'>{product.celular}</td>
                                    <td className=' py-2'>{product.direccion}</td>
                                    <td className=' py-2'>{product.contacto_emergencia}</td>
                                    <td className='flex py-2 gap-1 justify-center items-center pr-2 pt-6'>
                                        <button 
                                            className='bg-gray-500 text-white p-1 rounded-lg'
                                            onClick={() => handleEditProduct(product.id)}>
                                            <PencilIcon className='h4 w-4'/></button>

                                        <button 
                                            className='bg-gray-500 text-white p-1 rounded-lg'
                                            onClick={ () => handleDeleteProduct (product.id)}>   
                                            <TrashIcon className='h4 w-4'/></button>

                                        <button 
                                            className='bg-gray-500 text-white p-1 rounded-lg'
                                            onClick={ () => handleDetailsProduct (product)}>
                                            <EyeIcon className='h4 w-4'/></button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>  
            </div>
        </>
    );
};

export default Table_workers;
