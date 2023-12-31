
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import { DarkMode } from "../context/DarkMode";
import { useContext } from "react";

const PrivateLayout = () => {

    const {darkMode} = useContext(DarkMode); 

    return (
        <main className={darkMode ? `body dark` : `body light`}>
            <Header />
            <Outlet />
        </main>
    );
};

export default PrivateLayout;
