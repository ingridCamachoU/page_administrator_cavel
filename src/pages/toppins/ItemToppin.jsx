import { PencilIcon, TrashIcon, EyeIcon, CheckIcon } from '@heroicons/react/24/solid';
import { activedOrDisabledToppin, deleteToppin } from '../../services/toppins';
import { name, price } from "../../utils/ converter";
import { useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';
import { confirAlert } from '../../utils/alerts';

// eslint-disable-next-line react/prop-types
const ItemToppin = ({toppin, setEditDataToppin, setIsOpenModalAddToppins, loadDataToppins, setTitle, setToppin, setIsOpenModalDetailsToppins}) => {

    const {darkMode} = useContext(DarkMode);

    //Update Toppin//
    const handleEditToppin = (toppin) => {
        const copyData = {
            'id': toppin?.id,
            'name': toppin?.name,
            'description': toppin?.description,
            'price': toppin?.price,
            'image': toppin?.image_url
        };
        setToppin(toppin);
        setEditDataToppin(copyData);
        setIsOpenModalAddToppins(true); 
        loadDataToppins(toppin?.id);
        setTitle('Editar Toppin');
    };

    //Delete Toppin//
    const handleDeleToppin = (id) => {
        confirAlert('Eliminar Toppin','Está seguro de eliminar el toppin?', 'warning', 'Eliminar', deleteToppin(id, loadDataToppins));
    };

    //Detail Toppin//
    const handleDetailsToppin = (toppin) => {
        setEditDataToppin(toppin);
        setIsOpenModalDetailsToppins(true);
    };

    //Actived or Disabled Toppin//
    const disabledOrActivatedToppin = (toppin) => {
        if(toppin?.active === 0){
            confirAlert('Activar el toppin','Está seguro de activar el toppin?', 'warning', 'Activar', activedOrDisabledToppin(toppin, loadDataToppins));
        }else{
            confirAlert('Desactivar el toppin','Está seguro de desactivar el toppin?', 'warning', 'Desactivar', activedOrDisabledToppin(toppin, loadDataToppins));
        } 
    };

    const claseActivetypografia = () => {
        if(toppin?.active === 0 && darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 text-gray-200 line-through bg-[#222230]';
        }else if(toppin?.active === 0 && !darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 text-gray-500 line-through bg-skin-ligth';
        }else if(toppin?.active !== 0 && darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 bg-[#222230] text-white';
        }else{
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 bg-skin-ligth';
        }
    };

    const claseBtn = () => {
        if(toppin?.active === 0){
            return 'bg-white text-gray-400 border border-gray-400 p-1 rounded-lg';
        }else{
            return 'bg-gray-400 text-white p-1 rounded-lg border';
        }
    };
    {`${darkMode ? 'bg-[#222230] text-white' : 'bg-white border border-gray-400 p-1 rounded-lg'}`}
    return (
        <>
            <div className={claseActivetypografia()}>
                <div className='flex gap-3 md:w-2/5 w-full lg:w-2/5 items-center'>
                   
                    <p 
                        className='h-4 w-4 border cursor-pointer hover:bg-gray-300 hover:text-skin-ligth '
                        onClick={() => disabledOrActivatedToppin(toppin)}>
                        
                        {   toppin?.active !== 0 
                            ? 
                            <span className='w-full h-full flex  items-center justify-center'>
                                <CheckIcon className='h3 w-3 font-bold text-2xl'/>
                            </span>
                            : null
                        }
                        
                    </p>
                    
                    <h4 className='font-light'>{ name(toppin?.name) }</h4>
                </div>

                <p className='font-light md:w-2/5 w-full lg:w-2/5'>
                    {toppin?.description}
                </p>

                <p className='font-light md:w-1/6 w-full lg:w-1/6'>$ {price(toppin?.price)}</p>

                <div className=' flex gap-2'>
                    <button 
                        className={claseBtn()}
                        onClick={() => handleEditToppin(toppin)}>
                        <PencilIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                    <button 
                        className={claseBtn()}
                        onClick={ () => handleDeleToppin(toppin?.id)}>
                        <TrashIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                    <button 
                        className={claseBtn()}
                        onClick={ () => handleDetailsToppin(toppin)}>  
                        <EyeIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                </div>
            </div>   
        </>
    );
};

export default ItemToppin;

