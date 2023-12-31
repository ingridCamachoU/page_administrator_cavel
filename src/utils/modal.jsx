import { useState } from "react";

export const Modal = () => {
    
    //Modal Product//
    const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);

    //Modal Toppins//
    const [isOpenModalAddToppins, setIsOpenModalAddToppins] = useState(false);

    //Modal Worker//
    const [isOpenModalAddWorker, setIsOpenModalAddWorker] = useState(false);

    //Modal User//
    const [isOpenModalUser, setOpenModalUser] = useState(false);

    //Menu//
    const [openToogle, setOpenToogle] = useState(false);
    return [
        isOpenModalAddProduct, 
        setIsOpenModalAddProduct,

        isOpenModalAddToppins, 
        setIsOpenModalAddToppins,
    
        isOpenModalAddWorker,
        setIsOpenModalAddWorker,

        isOpenModalUser,
        setOpenModalUser,

        openToogle,
        setOpenToogle
    ];
  
};