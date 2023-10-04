import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { XMarkIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
const Form_toppins = ({isOpenModalAddToppins, setIsOpenModalAddToppins}) => {

    const {darkMode} = useContext(DarkMode);

    const handleModalClick = e => e.stopPropagation();

    const close = () => {
        setIsOpenModalAddToppins(false);
    };
    

    return (
        <div
            className={`${isOpenModalAddToppins ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed' : 'hidden'} ${darkMode ? 'bg-[#000000]/[90%]': 'bg-white/[90%]'}`}
            onClick={close}>

            <div 
                className={`${isOpenModalAddToppins && ' shadow-xl rounded-lg flex absolute flex-col lg:w-[500px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 top-16'} ${darkMode ? 'bg-[#212130]': 'bg-white'}`}
                onClick={handleModalClick}>

                <div className="flex justify-between mb-6 flex-wrap p-4 bg-skin-base rounded-t-xl">
                    <h1 
                        className='text-skin-ligth text-2xl ml-2'>Agregar Toppins</h1>
                    <span 
                        onClick={close}>
                        <XMarkIcon className="h6 w-6 text-skin-ligth font-semibold cursor-pointer"/>
                    </span>
                </div>

                <div className="text-gray-400 flex mb-4  justify-center lg:flex-row flex-col">
                    <div className="flex-col flex px-4">
                        <label>Nombre</label>
                        <input 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div>
                    
                    <div className="flex-col flex px-4">
                        <label>Precio</label>
                        <input 
                            type="number" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div>                
                </div>

                <div className="text-gray-400 flex mb-4 gap-6 justify-end lg:flex-row flex-col mr-14">
                    <div className="flex gap-4">
                        <input 
                            type="reset" 
                            value='Cancelar' 
                            onClick={close}
                            className="rounded-lg border p-2 text-gray-600 cursor-pointer h-10"/>

                        <input 
                            type="submit" 
                            value='Guardar'
                            className="rounded-lg bg-gray-500 p-2 text-white cursor-pointer h-10"/>
                    </div>  
                </div>
            </div>
        
        </div>
    );
};

export default Form_toppins;
