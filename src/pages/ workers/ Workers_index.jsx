import Layout_base from "../../layout/Layout_base";
import { Modal } from "../../utils/modal";
import Form_worker from "./Form_worker";
import Table_workers from "./Table_workers";

const  Workers_index = () => {

    const [isOpenModalAddworker, setOpenModalAddworker] = Modal();

    const open = () => setOpenModalAddworker(true);
    return (
  
        <Layout_base>
            <div className="flex flex-col sm:flex-row w-full  max-w-screen-xl p-4 justify-between items-center my-4 ">
                <h1 className="text-skin-base font-bold text-lg">LISTA DE TRABAJADORES</h1>

                <div className="lg:gap-20 gap-4 flex">
                    <select className="bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base font-light">
                        <option>Filtrar por Cargo</option>
                        <option>Mesero</option>
                        <option>Cajero</option>
                        <option>Cheff</option>
                    </select>
                
                    <div>
                        <button className="flex gap-2 items-center bg-skin-ligth border p-2 rounded-lg border-skin-base text-skin-base font-semibold cursor-pointer" onClick={open}>
                            <span >Agregar</span>
                        </button>    
                    </div>
                </div>
            </div>

            <Form_worker isOpenModalAddworker={isOpenModalAddworker} setOpenModalAddworker={setOpenModalAddworker}/>
            
            <Table_workers />
            
            
        </Layout_base>
    );
};

export default  Workers_index;




  