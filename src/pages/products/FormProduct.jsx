import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {useForm} from "../../hooks/useForm";
import { initialFormProduct } from "../../utils/initialialization";
import { addProduct, updateProduct } from "../../services/products";

// eslint-disable-next-line react/prop-types
const FormProduct = ({isOpenModalAddProduct, setIsOpenModalAddProduct, loadDataProduct, editDataProduct, setEditDataProduct, title, setTitle, product}) => {
    
    const {darkMode} = useContext(DarkMode);

    const handleModalClick = e => e.stopPropagation();

    const [ formData, handleChange, setFormData ] = useForm(initialFormProduct);
    const [ disabled, setDisabled ] = useState(false);
    
    //---Form Validation---//
    const [errors, setErrors] = useState({});
    const onValidate = (formData)=>{
        let errors = {};
        let regexName = /^([A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){5,20}$/;
        let regexDescription = /^.{1,50}$/;
        let regexPrice = /^[0-9]+$/;

        if (!formData.name.trim()){
            errors.name= 'El campo no debe ser vacio.';
        }else if(!regexName.test(formData.name)){
            errors.name= 'El campo es incorrecto debe tener de 5 a 20 caracteres.';
        }

        if (!formData.description.trim()){
            errors.description= 'El campo no debe ser vacio.';
        }else if(!regexDescription.test(formData.description)){
            errors.description= 'El campo es incorrecto debe tener de 5 hasta 50 caracteres.';
        }

        if(!regexPrice.test(formData.price)){
            errors.price= 'El campo "Precio" no debe estar vacio.';
        }

        return errors;
    };
 
    const err= onValidate(formData);
 
    const close = () => {
        setDisabled(false);
        setIsOpenModalAddProduct(false);
        setFormData(initialFormProduct);
        setEditDataProduct(null);
        setErrors('');
    };

    const handleChangeImage = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
            images: e.target.files[0],
        });
    };
    
    useEffect(() => {
        if( editDataProduct !== null){
            const copyData = {
                'name': editDataProduct?.name,
                'description': editDataProduct?.description,
                'price': editDataProduct?.price,
                'image': '',
                'images': editDataProduct?.image,
            };
            setFormData(copyData);
        } else{
            setFormData(initialFormProduct);
            setTitle('Agregar producto');
        }
    },[editDataProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(err);        
        if (Object.keys(err).length === 0){
            if (formData.name !== '' && formData.description !== ''  && formData.price !== ''){
                if (editDataProduct !== null){
                    updateProduct(editDataProduct?.id, formData, loadDataProduct, product);
                    setErrors(''); 
                    close();                 
                } else {
                    addProduct(formData, loadDataProduct);
                    close();
                }
            } 
        }else{
            setErrors(err);
        }
    };

    const loadImage = () => {
        if(formData?.image === '' && editDataProduct?.image){
            return(
                <img className="h-20 w-20" src={editDataProduct?.image} alt="imagen" />
            );
        }if(formData?.image){
            return(
                <img className="h-20 w-20" src={URL.createObjectURL(formData?.images)} alt="imagen" />
            );
        }if(formData?.image === ''){
            return(
                <svg className="mx-auto h-12 w-12 text-gray-300"   viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
            );
        }
    };

    const updateNameImg = () => {
        if(editDataProduct?.image && formData?.image === '' ){
            return(
                <p className="text-xs font-light p-2 overflow-x-auto">{editDataProduct?.image}</p> 
            );
        }
        if(formData?.image){
            return(
                <p className="text-xs font-light p-2 overflow-x-auto">{formData?.images?.name}</p> 
            );
        }
        if(formData?.image === ''){
            return(
                <p className="text-xs leading-5 font-light">PNG, JPG, SVG up to 10MB</p>  
            );
        }
    };

    return (
        <div
            className={
                `${isOpenModalAddProduct 
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed' 
                    : 'hidden'} ${darkMode 
                    ? 'bg-[#000000]/[90%]'
                    : 'bg-white/[90%]'
                }`
            }
            onClick={close}>

            <form 
                className={
                    `${isOpenModalAddProduct && ' shadow-xl rounded-lg flex absolute flex-col lg:w-[500px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 lg:top-14 sm:top-10 overflow-auto'} ${darkMode 
                        ? 'bg-[#212130]'
                        : 'bg-white'
                    }`
                }
                onClick={handleModalClick}
                onSubmit={handleSubmit}>

                <div className="flex justify-between mb-6 flex-wrap p-4 bg-skin-base rounded-t-xl">
                    <h1 
                        className='text-skin-ligth text-2xl ml-2'>{title}</h1>
                    <span 
                        onClick={close}>
                        <XMarkIcon className="h6 w-6 text-skin-ligth font-semibold cursor-pointer"/>
                    </span>
                </div>

                <div className="text-gray-700 flex mb-4 gap-2 justify-around lg:flex-row flex-col ">
                    <div className="flex-col flex px-4">
                        <label>Nombre</label>
                        <input 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1"
                            name="name"
                            disabled={disabled}
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-skin-red font-ligth text-xs lg:w-44 p-2 w-full text-center xs:w-full">{errors.name}</p>}
                    </div>
                    
                    <div className="flex-col flex px-4">
                        <label>Precio</label>
                        <input 
                            type="number" required
                            className="border border-gray-300 rounded-lg p-1"
                            name="price"
                            disabled={disabled}
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {errors.price && <p className="text-skin-red font-ligth text-xs lg:w-44 p-2 w-full text-center xs:w-full">{errors.price}</p>}
                    </div>            
                </div>

                <div className="text-gray-700 flex mb-4 gap-6 justify-around lg:flex-row flex-col">
                    <div className="flex-col flex px-4">
                        <div >
                            <label>Imagen</label>
                            <div className="mt-2 flex justify-center rounded-lg border px-1 py-1 w-48 overflow-x-auto">
                                <div className="text-center flex flex-col justify-center items-center p-2">
                                    {    
                                        loadImage()                                 
                                    }
            
                                    <div className="flex text-sm text-gray-500 justify-center flex-col">
                                        <label className="relative cursor-pointer rounded-md bg-white p-1 justify-center font-semibold text-gray-400 bg-skin-base ">
                                            <span className="text-sm underline">Seleccionar archivo</span>
                                                
                                            <input 
                                                name="image" 
                                                type="file" 
                                                accept="image/*"
                                                className="sr-only"
                                                disabled={disabled}
                                                value={formData.image}
                                                onChange={handleChangeImage}
                                            />  
                                   
                                        </label>
                                        {  
                                            updateNameImg()
                                        }   
                                    </div>                                                     
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="flex-col flex px-4">
                        <label>Caracteristicas</label>
                        <textarea 
                            type="text" required
                            className="border border-gray-300 rounded-lg p-1"
                            name="description"
                            disabled={disabled}
                            value={formData.description}
                            onChange={handleChange}
                        />
                        {errors.description && <p className="text-skin-red font-ligth text-xs lg:w-44 p-2 w-full text-center xs:w-full">{errors.description}</p>}
                    </div>                                
                </div>

                <div className="text-gray-400 flex mb-6 justify-end lg:flex-row pr-10">
                    <div className="flex gap-4">
                        <input 
                            type="reset" 
                            value='Cancelar' 
                            onClick={close}
                            disabled={disabled}
                            className="rounded-lg border-2 p-2 text-gray-600 cursor-pointer h-10 hover:bg-gray-500 hover:text-white"/>

                        <input 
                            type="submit" 
                            value='Guardar'
                            disabled={disabled}
                            className="rounded-lg bg-gray-400 p-2 text-white cursor-pointer h-10 hover:bg-gray-600"/>
                    </div>    
                </div>
            </form>
        
        </div>
    );
};

export default FormProduct;
