import { useContext } from "react";
import { activedOrDisabledProduct, deleteProduct } from "../../services/products";
import { confirAlert } from "../../utils/alerts";
import { DarkMode } from "../../context/DarkMode";
import { CheckIcon, EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { name, price } from "../../utils/ converter";

// eslint-disable-next-line react/prop-types
const ItemProduct = ({product, setEditDataProduct, setIsOpenModalAddProduct, loadDataProduct, setTitle, setProduct, setIsOpenModalDetailsProduct}) => {

    const {darkMode} = useContext(DarkMode);

    //Update Product//
    const handleEditProduct = (product) => {
        const copyData = {
            'id': product?.id,
            'name': product?.name,
            'description': product?.description,
            'price': product?.price,
            'image': product?.image_url
        };
        setProduct(product);
        setEditDataProduct(copyData);
        setIsOpenModalAddProduct(true); 
        loadDataProduct(product?.id);
        setTitle('Editar Product');
    };

    //Delete Product//
    const handleDeleProduct = (id) => {
        confirAlert('Eliminar Producto','Está seguro de eliminar el Producto?', 'warning', 'Eliminar', deleteProduct(id, loadDataProduct));
    };

    //Detail Product//
    const handleDetailsProduct = (product) => {
        setEditDataProduct(product);
        setIsOpenModalDetailsProduct(true);
    };

    //Actived or Disabled Product//
    const disabledOrActivatedProduct = (product) => {
        if(product?.active === 0){
            confirAlert('Activar el producto','Está seguro de activar el producto?', 'warning', 'Activar', activedOrDisabledProduct(product, loadDataProduct));
        }else{
            confirAlert('Desactivar el producto','Está seguro de desactivar el producto?', 'warning', 'Desactivar', activedOrDisabledProduct(product, loadDataProduct));
        } 
    };

    const claseActivetypografia = () => {
        if(product?.active === 0 && darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 text-gray-200 line-through bg-[#222230]';
        }else if(product?.active === 0 && !darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 text-gray-500 line-through bg-skin-ligth';
        }else if(product?.active !== 0 && darkMode){
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 bg-[#222230] text-white';
        }else{
            return 'flex flex-col md:flex-row w-full mb-4 mt-4 md:px-4 justify-center pl-8 pr-2 bg-skin-ligth';
        }
    };

    const claseBtn = () => {
        if(product?.active === 0){
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
                        onClick={() => disabledOrActivatedProduct(product)}>
                        
                        {   product?.active !== 0 
                            ? 
                            <span className='w-full h-full flex  items-center justify-center'>
                                <CheckIcon className='h3 w-3 font-bold text-2xl'/>
                            </span>
                            : null
                        }
                        
                    </p>
                    
                    <h4 className='font-light'>{ name(product?.name) }</h4>
                </div>

                <p className='font-light md:w-2/5 w-full lg:w-2/5'>
                    {product?.description}
                </p>

                <p className='font-light md:w-1/6 w-full lg:w-1/6'>$ { price(product?.price)}</p>

                <div className=' flex gap-2'>
                    <button 
                        className={claseBtn()}
                        onClick={() => handleEditProduct(product)}>
                        <PencilIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                    <button 
                        className={claseBtn()}
                        onClick={ () => handleDeleProduct(product?.id)}>
                        <TrashIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                    <button 
                        className={claseBtn()}
                        onClick={ () => handleDetailsProduct(product)}>  
                        <EyeIcon className='h4 w-4 cursor-pointer'/>
                    </button>
                </div>
            </div>
        
        </>
    );
};

export default ItemProduct;
