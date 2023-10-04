import { useState } from "react";

export const Modal = () => {
    
    //Modal Product//
    const [isOpenModalAddProduct, setIsOpenModalAddProduct] = useState(false);
    const [isOpenModalEditProduct, setIsOpenModalEditProduct] = useState(false);

    //Modal Toppins//
    const [isOpenModalAddToppins, setIsOpenModalAddToppins] = useState(false);
    const [isOpenModalEditToppins, setIsOpenModalEditToppins] = useState(false);

    //Modal Add//
    const [isOpenModalAdd, setOpenModalAdd] = useState(false);

    //Modal Worker//
    const [isOpenModalAddworker, setOpenModalAddworker] = useState(false);

    //Modal User//
    const [isOpenModalUser, setOpenModalUser] = useState(false);

    //Menu//
    const [openToogle, setOpenToogle] = useState(false);
    return [
        isOpenModalAddProduct, 
        setIsOpenModalAddProduct,
        isOpenModalEditProduct, 
        setIsOpenModalEditProduct, 

        isOpenModalAddToppins, 
        setIsOpenModalAddToppins,
        isOpenModalEditToppins, 
        setIsOpenModalEditToppins,

        isOpenModalAdd,
        setOpenModalAdd,

        isOpenModalAddworker,
        setOpenModalAddworker,

        isOpenModalUser,
        setOpenModalUser,

        openToogle,
        setOpenToogle
    ];
  
};