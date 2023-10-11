import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { name, price } from "../../utils/ converter";

// eslint-disable-next-line react/prop-types
const Detail_toppin = ({isOpenModalDetailsToppins, setIsOpenModalDetailsToppins, setEditDataToppin, editDataToppin}) => {

    const {darkMode} = useContext(DarkMode);

    const handleModalClick = e => e.stopPropagation();

    const close = () => {
        setIsOpenModalDetailsToppins(false);
        setEditDataToppin(null);
    };

    return (
        <div
            className={
                `${isOpenModalDetailsToppins 
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed' 
                    : 'hidden'} ${darkMode 
                    ? 'bg-[#000000]/[90%]'
                    : 'bg-white/[90%]'
                }`
            }
            onClick={close}>

            <div 
                className={
                    `${isOpenModalDetailsToppins && ' shadow-xl rounded-lg flex absolute flex-col lg:w-[500px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 lg:top-14 sm:top-10 overflow-auto'} ${darkMode 
                        ? 'bg-[#212130]'
                        : 'bg-white'
                    }`
                }
                onClick={handleModalClick}>

                <div className="flex justify-between mb-6 flex-wrap p-4 bg-skin-base rounded-t-xl">
                    <h1 
                        className='text-skin-ligth text-2xl ml-2'>Detalles del Toppin</h1>
                    <span 
                        onClick={close}>
                        <XMarkIcon className="h6 w-6 text-skin-ligth font-semibold cursor-pointer"/>
                    </span>
                </div>

                <div className=" flex mb-4 gap-2 justify-around lg:flex-row flex-col w-full">
                    <div className="flex-col flex px-4 gap-2 md:w-2/4 w-full">
                        <p>Nombre</p>
                        <p className="font-light border rounded-lg p-1">{name(editDataToppin?.name)}</p>
                    </div>
                    
                    <div className="flex-col flex px-4 gap-2 md:w-2/4 w-full">
                        <p>Precio</p>
                        <p className="font-light border rounded-lg p-1">$ {price(editDataToppin?.price)}</p>
                    </div>            
                </div>

                <div className=" flex mb-4 gap-2 justify-around lg:flex-row flex-col w-full">

                    <div className="flex-col flex px-4 gap-2 md:w-2/4 w-full">
                        <p>Imagen</p>

                        {
                            editDataToppin?.image_url !== null
                                ?
                                <img className="font-light border rounded-lg p-1 h-40 w-40" src={editDataToppin?.image_url}></img>
                                :
                                <svg className="mx-auto h-40 w-40 text-gray-300"   viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                        }
                        
                    </div>      

                    <div className="flex-col flex px-4 gap-2 md:w-2/4 w-full">                  
                        <p>Caracteristicas</p>
                        <p className="font-light border rounded-lg p-1">{name(editDataToppin?.description)}</p>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Detail_toppin;
