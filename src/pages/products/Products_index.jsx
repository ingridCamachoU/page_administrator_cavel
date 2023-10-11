
import { useContext, useState } from "react";
import Layout_base from "../../layout/Layout_base";
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon,  EyeIcon } from '@heroicons/react/24/solid';
import { Modal } from "../../utils/modal";
import Form_product from "./Form_product";
import { DarkMode } from "../../context/DarkMode";

const Products_index = () => {

    const [
        isOpenModalAddProduct, setIsOpenModalAddProduct
    ] = Modal();

    const [openAcordion, setOpenAcordion] = useState(true);
    const [openAcordion2, setOpenAcordion2] = useState(true);

    const openModalProduct = () => {
        setIsOpenModalAddProduct(true);
    };

    const openOrCLoseItem = () => {
        !openAcordion ? setOpenAcordion(true):setOpenAcordion(false);
    };

    const openOrCLoseItem2 = () => {
        !openAcordion2 ? setOpenAcordion2(true):setOpenAcordion2(false);
    };

    const {darkMode} = useContext(DarkMode);

    return (
        <Layout_base>
            <div 
                className={
                    `${darkMode 
                        ? 'flex w-11/12 bg-[#222230] text-gray-300  max-w-screen-xl p-4 justify-between items-center mt-12 mb-6 shadow-sm shadow-white rounded-lg flex-col sm:flex-row' 
                        : 'flex w-11/12  max-w-screen-xl p-4 justify-between items-center mt-12 mb-6 bg-skin-ligth shadow-sm border rounded flex-col sm:flex-row'
                    }`
                }
            >
                <h1 
                    className={
                        `${darkMode 
                            ? 'font-bold text-lg'
                            : 'font-bold text-lg text-skin-base'
                        }`
                    }
                >LISTA DE PRODUCTOS</h1>

                <div className="lg:gap-20 gap-4 flex mt-4 sm:mt-0">
                    <select 
                        className={
                            `${darkMode 
                                ? 'flex gap-2 items-center bg-[#222230] border p-2 rounded-lg border-gray-600 text-skin-ligth cursor-pointer hover:bg-gray-700 hover:text-skin-ligth mx-4'
                                : 'flex gap-2 items-center bg-skin-ligth border p-2 rounded-lg border-gray-300 text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-gray-500 mx-4'
                            }`
                        }>
                        <option>Filtrar por Cargo</option>
                        <option>Mesero</option>
                        <option>Cajero</option>
                        <option>Cheff</option>
                    </select>
                
                    <div>
                        <button 
                            className={
                                `${darkMode 
                                    ? 'flex gap-2 items-center bg-gray-500 border p-2 rounded-lg border-gray-400 text-skin-ligth cursor-pointer hover:bg-gray-600 hover:text-skin-ligth mx-4'
                                    : 'flex gap-2 items-center bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base cursor-pointer hover:bg-skin-base hover:text-skin-ligth mx-4'
                                }`
                            }
                            onClick={openModalProduct}>
                            <span >Agregar</span>
                        </button>    
                    </div>
                </div>
            </div>

            <Form_product 
                isOpenModalAddProduct={isOpenModalAddProduct} 
                setIsOpenModalAddProduct={setIsOpenModalAddProduct}/>

            <div className="flex mt-6 flex-col items-start w-11/12 bg-skin-ligth shadow-md rounded-lg overflow-x-auto max-w-screen-xl">
                <div 
                    onClick={openOrCLoseItem}
                    className={openAcordion ? 'flex w-full justify-between bg-gray-300 p-6 rounded' : 'flex w-full justify-between bg-skin-ligth p-6 rounded'}>
                    <h1 className='text-lg '>Hamburguesa</h1>
                    {   openAcordion ?
                        <ChevronUpIcon 
                            className='h-5 w-5'
                        /> 
                        :
                        <ChevronDownIcon
                            className='h-5 w-5'
                        />
                    }
        
                </div>
                { 
                    openAcordion && 
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full mb-8 mt-8 px-4 justify-center'>
                        <div className='flex gap-2'>
                            <input 
                                type='checkbox'
                                className='accent-skin-base'/> 
                            <h4>Charlot</h4>
                        </div>

                        <p>
                        Carne, queso americano, tocineta BBQ, salsa de la casa,vegetales
                        </p>

                        <span>$ 12000</span>

                        <div className=' flex gap-2'>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <PencilIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <TrashIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>   
                                <EyeIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                }  
            </div>
            
            <div className="flex mt-6 flex-col items-start w-11/12 bg-skin-ligth shadow-md rounded-lg overflow-x-auto max-w-screen-xl">
                <div 
                    onClick={openOrCLoseItem}
                    className={openAcordion ? 'flex w-full justify-between bg-gray-300 p-6 rounded' : 'flex w-full justify-between bg-skin-ligth p-6 rounded'}>
                    <h1 className='text-lg '>Hamburguesa</h1>
                    {   openAcordion ?
                        <ChevronUpIcon 
                            className='h-5 w-5'
                        /> 
                        :
                        <ChevronDownIcon
                            className='h-5 w-5'
                        />
                    }
        
                </div>
                { 
                    openAcordion && 
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full mb-8 mt-8 px-4 justify-center'>
                        <div className='flex gap-2'>
                            <input 
                                type='checkbox'
                                className='accent-skin-base'/> 
                            <h4>Charlot</h4>
                        </div>

                        <p>
                        Carne, queso americano, tocineta BBQ, salsa de la casa,vegetales
                        </p>

                        <span>$ 12000</span>

                        <div className=' flex gap-2'>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <PencilIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <TrashIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>   
                                <EyeIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                }

                { 
                    openAcordion && 
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full mb-8 mt-8 px-4 justify-center'>
                        <div className='flex gap-2'>
                            <input 
                                type='checkbox'
                                className='accent-skin-base'/> 
                            <h4>Charlot</h4>
                        </div>

                        <p>
                        Carne, queso americano, tocineta BBQ, salsa de la casa,vegetales
                        </p>

                        <span>$ 12000</span>

                        <div className=' flex gap-2'>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <PencilIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <TrashIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>   
                                <EyeIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                }
                 
            </div>

            <div className="flex mt-10 flex-col items-start w-11/12 shadow-md bg-skin-ligth rounded-lg max-w-screen-xl">
                <div 
                    onClick={openOrCLoseItem2}
                    className={openAcordion2 ? 'flex w-full justify-between bg-gray-300 p-6 rounded' : 'flex w-full justify-between bg-skin-ligth p-6 rounded'}>
                    <h1 className='text-lg '>Perros</h1>
                    {   openAcordion2 ?
                        <ChevronUpIcon 
                            className='h-5 w-5'
                        /> 
                        :
                        <ChevronDownIcon
                            className='h-5 w-5'
                        />
                    }
        
                </div>
                { 
                    openAcordion2 && 
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full mb-8 mt-8 px-4 justify-center'>
                        <div className='flex gap-2'>
                            <input 
                                type='checkbox'
                                className='accent-skin-base'/> 
                            <h4>Charlot</h4>
                        </div>

                        <p>
                        Carne, queso americano, tocineta BBQ, salsa de la casa,vegetales
                        </p>

                        <span>$ 12000</span>

                        <div className=' flex gap-2'>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <PencilIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <TrashIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>   
                                <EyeIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                }

                { 
                    openAcordion2 && 
                    <div className='flex flex-col lg:flex-row lg:justify-between w-full mb-8 mt-8 px-4 justify-center'>
                        <div className='flex gap-2'>
                            <input 
                                type='checkbox'
                                className='accent-skin-base'/> 
                            <h4>Charlot</h4>
                        </div>

                        <p>
                        Carne, queso americano, tocineta BBQ, salsa de la casa,vegetales
                        </p>

                        <span>$ 12000</span>

                        <div className=' flex gap-2'>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <PencilIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>
                                <TrashIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                            <button 
                                className='bg-gray-400 text-white p-1 rounded-lg'>   
                                <EyeIcon className='h4 w-4 cursor-pointer'/>
                            </button>
                        </div>
                    </div>
                }
                 
            </div>
        </Layout_base>
    );
};

export default Products_index;
