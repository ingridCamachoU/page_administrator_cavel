import { useContext, useEffect, useState } from "react";
import LayoutBase from "../../layout/LayoutBase";
import { Modal } from "../../utils/modal";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { endPoints } from "../../services/endPoints/endPoints";
import DetailToppin from "./DetailToppin";
import { DarkMode } from "../../context/DarkMode";
import { useFetch } from "../../hooks/useFetch";
import { alert } from "../../utils/alerts";
import Loading from "../../components/Loading";
import FormToppins from "./FormToppins";
import ItemToppin from "./ItemToppin";

const ToppinsIndex = () => {

    const url = endPoints.toppins.getToppins(1);
    const [isOpenModalAddToppins, setIsOpenModalAddToppins] = Modal();
    const [isOpenModalDetailsToppins, setIsOpenModalDetailsToppins] = useState(false);

    const [openAcordion, setOpenAcordion] = useState(true);

    const [ editDataToppin, setEditDataToppin ] = useState(null);
    const [title, setTitle]= useState('');
    const [ toppin, setToppin ] = useState('');
    const [classView, setClassView] = useState('flex flex-col w-full');

    const openModalToppins = () => {
        setIsOpenModalAddToppins(true);
    };

    const openOrCLoseItem = () => {
        !openAcordion ? setOpenAcordion(true) : setOpenAcordion(false);
        !openAcordion ? setClassView('flex flex-col w-full') : setClassView('hidden');
    };
    const data = useFetch(url);
    const {data:dataToppins, loading, error, loadingData} = data;
    
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
                }> LISTA DE TOPPINS </h1>
                
                <button 
                    className={
                        `${darkMode 
                            ? 'flex gap-2 items-center bg-gray-500 border p-2 rounded-lg border-gray-400 text-skin-ligth cursor-pointer hover:bg-gray-600 hover:text-skin-ligth mx-4'
                            : 'flex gap-2 items-center bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base cursor-pointer hover:bg-skin-base hover:text-skin-ligth mx-4'
                        }`
                    }
                    onClick={openModalToppins}>
                    <span >Agregar</span>
                </button> 
            </div>

            <FormToppins 
                loadDataToppins={loadingData}
                toppin={toppin}
                title={title}
                setTitle={setTitle}
                editDataToppin={editDataToppin}
                setEditDataToppin={setEditDataToppin}
                isOpenModalAddToppins={isOpenModalAddToppins}
                setIsOpenModalAddToppins={setIsOpenModalAddToppins}/>

            <DetailToppin 
                isOpenModalDetailsToppins={isOpenModalDetailsToppins} 
                setIsOpenModalDetailsToppins={setIsOpenModalDetailsToppins}
                setEditDataToppin={setEditDataToppin}
                editDataToppin={editDataToppin}/>

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
                    <h1 className='text-lg '>Toppins</h1>
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
                                dataToppins.length > 0 
                                    ? dataToppins.map( toppin => (
                                        <ItemToppin 
                                            key={toppin.id}
                                            setToppin={setToppin}
                                            toppin={toppin}
                                            setIsOpenModalDetailsToppins={setIsOpenModalDetailsToppins}
                                            setEditDataToppin={setEditDataToppin}
                                            setIsOpenModalAddToppins={setIsOpenModalAddToppins}
                                            loadDataToppins={loadingData}
                                            setTitle={setTitle}/>
                                    ))

                                    : null   
                            }
                            
                            {
                                dataToppins.length === 0 && error === null
                                    ? <div className='flex w-full mb-4 mt-4 px-4 justify-center'>No hay toppins registrados</div>

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

export default ToppinsIndex;
