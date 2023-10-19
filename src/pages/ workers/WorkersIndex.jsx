import { useContext, useState } from "react";
import LayoutBase from "../../layout/LayoutBase";
import { Modal } from "../../utils/modal";
import DetailWorker from './DetailWorker';
import FormWorker from "./FormWorker";
import TableWorkers from "./TableWorkers";
import { DarkMode } from "../../context/DarkMode";
import { Error } from "../../utils/alerts";

const WorkersIndex = () => {

    const [isOpenModalAddWorker, setIsOpenModalAddWorker] = Modal();
    const [isOpenModalDetailsWorker, setIsOpenModalDetailsWorker] = useState(false);

    const [ dataWorkers, setDataWorkers] = useState([
        {
            'id': '01',
            'name': 'Saray Perez',
            'cargo': 'Mesera',
            'celular': 303489988,
            'direccion': 'cll 5-# 12-90 brr el salado',
            'contacto_emergencia': 'Luis Sanchez 312 348 908',
        },
        {
            'id': '02',
            'name': 'Saray Perez',
            'cargo': 'Cajer',
            'celular': 303489988,
            'direccion': 'cll 5-# 12-90 brr el salado',
            'contacto_emergencia': 'Luis Sanchez 312 348 908',
        },
        {
            'id': '03',
            'name': 'Saray Perez',
            'cargo': 'Cheff',
            'celular': 303489988,
            'direccion': 'cll 5-# 12-90 brr el salado',
            'contacto_emergencia': 'Luis Sanchez 312 348 908',
        },
    ]);
    const [ editDataWorkers, setEditDataWorkers] = useState(null);
    const [title, setTitle]= useState('');

    const open = () => setIsOpenModalAddWorker(true);

    //--load Data Workers--//
    const loadDataWorkers = () => {
        fetch(endPoints.toppins.getToppins(1))
            .then(response => response.json())
            .then(data => setDataWorkers(data.message))
            .catch((error) => {
                console.log(error);
                Error(error);          
            });
    };

    // useEffect(() => {
    //     load_data_workers();
    // }, []);


    const {darkMode} = useContext(DarkMode);

    return (
        <LayoutBase>
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
                >LISTA DE TRABAJADORES</h1>

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
                            onClick={open}>
                            <span >Agregar</span>
                        </button>    
                    </div>
                </div>
            </div>

            <FormWorker 
                title={title}
                setTitle={setTitle}
                editDataWorkers={editDataWorkers}
                setEditDataWorkers={setEditDataWorkers}
                loadDataWorkers={loadDataWorkers}
                setIsOpenModalAddWorker={setIsOpenModalAddWorker}
                isOpenModalAddWorker={isOpenModalAddWorker} />

            <DetailWorker 
                isOpenModalDetailsWorker={isOpenModalDetailsWorker}
                setIsOpenModalDetailsWorker={setIsOpenModalDetailsWorker}
                setEditDataWorkers={setEditDataWorkers}
                editDataWorkers={editDataWorkers}/>
            
            <TableWorkers 
                dataWorkers={dataWorkers}
                setEditDataWorkers={setEditDataWorkers}
                setIsOpenModalAddWorker={setIsOpenModalAddWorker}
                loadDataWorkers={loadDataWorkers}
                setTitle={setTitle}
                setIsOpenModalDetailsWorker={setIsOpenModalDetailsWorker}/>

        </LayoutBase>
    );
};

export default WorkersIndex;




  