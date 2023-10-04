import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { XMarkIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
const Form_worker = ({isOpenModalAddworker, setOpenModalAddworker}) => {

    const {darkMode} = useContext(DarkMode);

    const handleModalClick = e => e.stopPropagation();

    const close = () => {
        setOpenModalAddworker(false);
    };

    return (
        <div
            className={`${isOpenModalAddworker ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed' : 'hidden'} ${darkMode ? 'bg-[#000000]/[90%]': 'bg-white/[90%]'}`}
            onClick={close}>
            
            <div 
                className={`${isOpenModalAddworker && ' shadow-xl rounded-lg flex absolute flex-col lg:w-[500px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 top-16'} ${darkMode ? 'bg-[#212130]': 'bg-white'}`}
                onClick={handleModalClick}>

                <div className="flex justify-between mb-6 flex-wrap p-4 bg-skin-base rounded-t-xl">
                    <h1 
                        className='text-skin-ligth text-2xl ml-2'>Agregar Producto</h1>
                    <span 
                        onClick={close}>
                        <XMarkIcon className="h6 w-6 text-skin-ligth font-semibold cursor-pointer"/>
                    </span>
                </div>

                <div className="text-gray-400 flex mb-4 gap-6 justify-around lg:flex-row flex-col ">
                    <div className="flex-col flex">
                        <label>Nombre</label>
                        <input 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div>
                    
                    <div className="flex-col flex px-4">
                        <label>Cargo</label>
                        <input 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div>                
                </div>

                <div className="text-gray-400 flex mb-4 gap-6 justify-around lg:flex-row flex-col">
                    
                    <div className="flex-col flex">
                        <label>Celular</label>
                        <input 
                            type="number" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div> 

                    <div className="flex-col flex px-4">
                        <label>Dirección</label>
                        <input 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                        />
                    </div>              
                </div>

                <div className="text-gray-400 flex mb-4  justify-around lg:flex-row flex-col">
                    <div className="flex-col flex">
                        <div className="col-span-full">
                            <label>Imagen</label>
                            <div className="mt-2 flex justify-center rounded-lg border px-2 py-4">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-500">
                                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-skin-base focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="justify-between flex flex-col">
                        <div className="flex-col flex px-4">
                            <label>Contacto de Emergencia</label>
                            <input 
                                type="text" required
                                className="border border-gray-300 rounded-lg p-1 focus:outline-none"
                            />
                        </div>  
                        
                        <div className="flex gap-4 ml-4">
                            <input 
                                type="reset" 
                                value='Cancelar' 
                                onClick={close}
                                className="rounded-lg border-2 p-2 text-gray-600 cursor-pointer h-10 hover:bg-gray-500 hover:text-white"/>

                            <input 
                                type="submit" 
                                value='Guardar'
                                className="rounded-lg bg-gray-500 p-2 text-white cursor-pointer h-10 hover:bg-gray-600"/>
                        </div>    
                    </div>     
                </div>  
            </div>
        
        </div>
    );
};

export default Form_worker;
