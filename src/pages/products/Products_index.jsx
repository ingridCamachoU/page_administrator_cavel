
import { useState } from "react";
import Layout_base from "../../layout/Layout_base";
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon,  EyeIcon } from '@heroicons/react/24/solid';
import { Modal } from "../../utils/modal";
import Form_product from "./Form_product";
import Form_toppins from "./Form_toppins";

const Products_index = () => {

    const [
        isOpenModalAddProduct, setIsOpenModalAddProduct, 
        isOpenModalAddToppins, setIsOpenModalAddToppins,
        isOpenModalAdd, setOpenModalAdd, 
    ] = Modal();

    const [openAcordion, setOpenAcordion] = useState(true);
    const [openAcordion2, setOpenAcordion2] = useState(true);
 
    const openModalToppins = () => {
        setIsOpenModalAddToppins(true);
        setOpenModalAdd(false);
    };

    const openModalProduct = () => {
        setIsOpenModalAddProduct(true);
        setOpenModalAdd(false);
    };

    const openOrCLose = () => {
        !isOpenModalAdd ? setOpenModalAdd(true):setOpenModalAdd(false);
    };

    const openOrCLoseItem = () => {
        !openAcordion ? setOpenAcordion(true):setOpenAcordion(false);
    };

    const openOrCLoseItem2 = () => {
        !openAcordion2 ? setOpenAcordion2(true):setOpenAcordion2(false);
    };
    
    return (
        <Layout_base>
            <div className="flex flex-col sm:flex-row w-full  max-w-screen-xl p-4 justify-between items-center my-4 ">
                <h1 className="text-skin-base font-bold text-lg">LISTA DE PRODUCTOS</h1>

                <div className="lg:gap-20 gap-4 flex">
                    <select className="bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base font-light">
                        <option>Filtrar por Categoria</option>
                        <option>Hamburguesa</option>
                        <option>Perro</option>
                    </select>
                
                    <div>
                        <p className="flex gap-2 items-center bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base font-semibold cursor-pointer" onClick={openOrCLose}>
                            <span >Agregar</span>
                            <span>
                                {   isOpenModalAdd ?
                                    <ChevronUpIcon 
                                        className='h-5 w-5'
                                    /> 
                                    :
                                    <ChevronDownIcon
                                        className='h-5 w-5'
                                    />
                                }
                            </span>
                        </p>
                        {
                            isOpenModalAdd &&
                            <div className=" bg-skin-ligth  p-2 rounded-lg  text-skin-base my-2 px-4 drop-shadow-md absolute z-40">
                                <p 
                                    className="cursor-pointer hover:text-skin-ligth hover:bg-skin-base px-1 rounded" 
                                    onClick={openModalToppins}>Toppins</p>
                                <p 
                                    className="cursor-pointer hover:text-skin-ligth hover:bg-skin-base px-1 rounded" 
                                    onClick={openModalProduct}>Producto
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Form_product 
                isOpenModalAddProduct={isOpenModalAddProduct} 
                setIsOpenModalAddProduct={setIsOpenModalAddProduct}/>

            <Form_toppins 
                isOpenModalAddToppins={isOpenModalAddToppins}
                setIsOpenModalAddToppins={setIsOpenModalAddToppins}/>

            <div className="flex mt-10 flex-col items-start w-11/12 bg-skin-ligth shadow-md rounded-lg overflow-x-auto max-w-screen-xl">
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
