
import { useContext, useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { Modal } from "../../utils/modal";
import { alert } from "../../utils/alerts";
import { DarkMode } from "../../context/DarkMode";
import { useFetch } from "../../hooks/useFetch";
import { endPoints } from "../../services/endPoints/endPoints";
import LayoutBase from "../../layout/LayoutBase";
import FormProduct from "./FormProduct";
import ItemProduct from "../products/ItemProduct";
import Loading from "../../components/Loading";
import DetailProduct from "./DetailProduct";

const ProductsIndex = () => {

    const url = endPoints.product.getProduct(1);
    const [isOpenModalAddProduct, setIsOpenModalAddProduct] = Modal();
    const [isOpenModalDetailsProduct, setIsOpenModalDetailsProduct] = useState(false);

    const [openAcordion, setOpenAcordion] = useState(true);

    const [ editDataProduct, setEditDataProduct ] = useState(null);
    const [title, setTitle]= useState('');
    const [ product, setProduct ] = useState('');
    const [classView, setClassView] = useState('flex flex-col w-full');

    const openModalProduct = () => {
        setIsOpenModalAddProduct(true);
    };

    const openOrCLoseItem = () => {
        !openAcordion ? setOpenAcordion(true) : setOpenAcordion(false);
        !openAcordion ? setClassView('flex flex-col w-full') : setClassView('hidden');
    };
    const data = useFetch(url);
    const {data:dataProduct, loading, error, loadingData} = data;
    
    const {darkMode} = useContext(DarkMode);

    const claseDark = () => {
        if(openAcordion && darkMode){
            return('flex w-full justify-between bg-[#222230] shadow shadow-white text-white p-6 rounded');
        }else if(openAcordion && !darkMode){
            return('flex w-full justify-between bg-gray-300 p-6 rounded');
        }else if(!openAcordion && darkMode){
            return('flex w-full justify-between bg-blue-30 text-gray-300 p-6 rounded');
        }else{
            return('flex w-full justify-between bg-skin-ligth p-6 rounded');
        }
    };

    useEffect(() => {
        loadingData();
    },[url]);

    return (
        <LayoutBase>
            <div className={
                `${darkMode 
                    ? 'flex w-11/12 bg-[#222230] text-gray-300  max-w-screen-xl p-4 justify-between items-center mt-12 mb-6 shadow-sm shadow-white rounded-lg' 
                    : 'flex w-11/12  max-w-screen-xl p-4 justify-between items-center mt-12 mb-6 bg-skin-ligth shadow-sm border rounded'
                }`
            }
            >
                <h1 className={
                    `${darkMode 
                        ? 'font-bold text-lg'
                        : 'font-bold text-lg text-skin-base'
                    }`
                }> LISTA DE PRODUCTS </h1>
                
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

            <FormProduct 
                loadDataProduct={loadingData}
                product={product}
                title={title}
                setTitle={setTitle}
                editDataProduct={editDataProduct}
                setEditDataProduct={setEditDataProduct}
                isOpenModalAddProduct={isOpenModalAddProduct}
                setIsOpenModalAddProduct={setIsOpenModalAddProduct}/>

            <DetailProduct 
                isOpenModalDetailsProduct={isOpenModalDetailsProduct} 
                setIsOpenModalDetailsProduct={setIsOpenModalDetailsProduct}
                setEditDataProduct={setEditDataProduct}
                editDataProduct={editDataProduct}/>

            <div 
                className={
                    `${darkMode 
                        ? 'flex mt-6 flex-col items-start w-11/12 bg-[#222230] shadow-md rounded-lg overflow-x-auto max-w-screen-x mb-16' 
                        : 'flex mt-6 flex-col items-start w-11/12 bg-skin-ligth shadow-md rounded-lg overflow-x-auto max-w-screen-x mb-16'
                    }`
                }
            >
                <div 
                    onClick={openOrCLoseItem}
                    className={claseDark()}>
                    <h1 className='text-lg '>Producto</h1>
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
                    loading 
                        ? <Loading />

                        : 
                        <div className={classView}>
                            {
                                dataProduct.length > 0 
                                    ? dataProduct.map( product => (
                                        <ItemProduct 
                                            key={product.id}
                                            setProduct={setProduct}
                                            product={product}
                                            setIsOpenModalDetailsProduct={setIsOpenModalDetailsProduct}
                                            setEditDataProduct={setEditDataProduct}
                                            setIsOpenModalAddProduct={setIsOpenModalAddProduct}
                                            loadDataProduct={loadingData}
                                            setTitle={setTitle}/>
                                    ))

                                    : null   
                            }
                            
                            {
                                dataProduct.length === 0 && error === null
                                    ? <div className='flex w-full mb-4 mt-4 px-4 justify-center'>No hay Productos registrados</div>

                                    : null   
                            }
                        </div>
                }
                {
                    error !== null 
                        ? alert('Error de conexión', 'error')
                        : null
                }
  
            </div>

        </LayoutBase>
    );
};

export default ProductsIndex;
