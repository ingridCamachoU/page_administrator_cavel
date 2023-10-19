import { useContext } from "react";
import Swal from 'sweetalert2';
import { DarkMode } from '../../context/DarkMode';
import { PencilIcon,EyeIcon,TrashIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const TableWorkers = ({dataWorkers, setEditDataWorkers, setIsOpenModalAddWorker, loadDataWorkers, setTitle, setIsOpenModalDetailsWorker}) => {

    const {darkMode} = useContext(DarkMode);
    
    //Update Worker//
    const handleEditWorker = (worker) => {
        setEditDataWorkers(worker);
        setIsOpenModalAddWorker(true); 
        loadDataWorkers(worker?.id);
        setTitle('Editar Trabajador');
    };

    //Delete Worker//
    const handleDeleteworker = (id) => {  
        Swal.fire({
            title: 'Eliminar producto',
            text: "Está seguro de eliminar el trabajador?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                // deleteWorker(id, loadDataWorkers);
            }
        });
    };

    //Detail Worker//
    const handleDetailsWorke = (worker) => {
        setIsOpenModalDetailsWorker(true);
        setEditDataWorkers(worker);
    };

    return (    
        <div className="flex flex-col w-full mt-6 ">
            <div className="sm:-mx-4 lg:-mx-4 flex justify-center ">
                <div className="inline-block w-11/12 sm:px-2 lg:px-2 ">
                    <div className="overflow-x-auto ">
                        <table className="w-full text-center text-s font-light pb-4 mb-4 shadow-md border" >
                            <thead >
                                <tr className={
                                    `${darkMode 
                                        ? 'bg-[#222230] border-b border-gray-400 text-gray-200' 
                                        : 'bg-skin-ligth'
                                    }`
                                }>
                                    <th className='px-4 py-3 text-sm'>NOMBRE</th>
                                    <th className='px-4 py-3 text-sm'>CARGO</th>
                                    <th className='px-4 py-3 text-sm'>CELULAR</th>
                                    <th className='px-4 py-3 text-sm'>DIRECCIÓN</th>
                                    <th className='px-4 py-3 text-sm'>CONTACTO EMERGENCIA</th>
                                    <th className='px-2 py-3 text-sm'>ACCIONES</th>
                                </tr>
                            </thead>

                            <tbody className={`${darkMode ? 'bg-[#222230] text-white border' : 'bg-white text-black border'}`}>
                                {   
                                    dataWorkers?.length === 0 ? <tr className='border-b text-center w-full'><td colSpan="10" className='px-4 py-2 text-center'>No hay datos</td></tr> : (dataWorkers?.map)(worker => (
                                        <tr key={worker?.id} className=' w-11/12'>
                                            <td className='py-2'>{worker?.name}</td>
                                            <td className='py-2'>{worker?.cargo}</td>
                                            <td className=' py-2'>{worker?.celular}</td>
                                            <td className=' py-2'>{worker?.direccion}</td>
                                            <td className=' py-2'>{worker?.contacto_emergencia}</td>
                                            <td className='flex py-2 gap-1 justify-center items-center pr-2 pt-6 px-2'>
                                                <button 
                                                    className='bg-gray-400 text-white p-1 rounded-lg'
                                                    onClick={() => handleEditWorker(worker?.id)}>
                                                    <PencilIcon className='h4 w-4'/></button>

                                                <button 
                                                    className='bg-gray-400 text-white p-1 rounded-lg'
                                                    onClick={ () => handleDeleteworker(worker?.id)}>   
                                                    <TrashIcon className='h4 w-4'/></button>

                                                <button 
                                                    className='bg-gray-400 text-white p-1 rounded-lg'
                                                    onClick={ () => handleDetailsWorke(worker)}>
                                                    <EyeIcon className='h4 w-4'/></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableWorkers;
