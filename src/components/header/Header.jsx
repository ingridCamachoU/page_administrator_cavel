import { Link, NavLink } from "react-router-dom";
import { ArrowRightOnRectangleIcon, Bars3Icon, ChevronDownIcon, ChevronUpIcon, MoonIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import user from "../../assets/user.jpg";
import logo from "../../assets/logo.png";
import { Modal } from "../../utils/modal";

const Header = () => {

    const activesStyle = 'flex gap-2 bg-skin-ligth text-skin-base px-2 rounded';
    const disabledStyle = 'flex gap-2';

    const [isOpenModalUser,setOpenModalUser, openToogle, setOpenToogle] = Modal();
  

    const menuOpenToogle = () => {
        openToogle ? setOpenToogle(false) : setOpenToogle(true);
    };

    const openOrCLose = () => {
        !isOpenModalUser ? setOpenModalUser(true): setOpenModalUser(false);
    };

    return (
        <header 
            className="tex-black flex top-0 right-0 w-full p-4 md:pb-4 pb-2 gap-8 justify-between bg-skin-base text-skin-ligth lg:rounded-b-[60px]">
            
            <div className="ml-8">
                <img 
                    src={logo} 
                    alt="logo"
                    className="w-28" />
            </div>
            
            <span className=" lg:hidden flex" onClick={menuOpenToogle}>
                <Bars3Icon className="w-8 h-8 text-white"/>
            </span>  
            {
                openToogle ? 
                    <div className="bg-skin-base w-full min-h-screen absolute top-0 left-0 text-white font-bold">
                        <span className='top-6 right-10 cursor-pointer absolute'>
                            <XMarkIcon 
                                onClick={menuOpenToogle}
                                className="h8 w-8"/>
                        </span>

                        <div className="flex justify-center items-center min-h-screen">
                            <ul className="gap-8 flex flex-col">
                                <li>
                                    <Link
                                        to=''
                                        onClick={menuOpenToogle}
                                    >    
                                        PRODUCTOS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='workers'
                                        onClick={menuOpenToogle}
                                    >
                                        TRABAJADORES
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='workers'
                                        onClick={menuOpenToogle}
                                    >
                                        MI PERFIL
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div> 
                    : null
            }
            

            <nav className="lg:flex gap-28 hidden">
                <ul className="flex gap-12">
                    <li>
                        <NavLink
                            to=''
                            className={({isActive}) =>
                                isActive ? activesStyle : disabledStyle}>
                                
                            PRODUCTOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='workers'
                            className={({isActive}) =>
                                isActive ? activesStyle : disabledStyle}>
                            TRABAJADORES
                        </NavLink>
                    </li>
                </ul>

                <div className="flex gap-2 justify-center">
                    <p className="flex flex-col">
                        <span className="font-bold">Erick Sanchez</span>
                        <span className="font-light text-sm text-gray-300">Administrador</span>
                    </p>

                    <div className="flex justify-center items-center gap-2 relative">
                        <span >
                            <img className="rounded-full w-12 h-12 object-cover p-1 bg-white" src={user} alt="user" />
                        </span>
                        
                        <span onClick={openOrCLose}
                            className="cursor-pointer">
                            {   isOpenModalUser ?
                                <ChevronUpIcon 
                                    className='h-5 w-5'
                                /> 
                                :
                                <ChevronDownIcon
                                    className='h-5 w-5'
                                />
                            }
                        </span>
                        {
                            isOpenModalUser &&
                            <p className="absolute bg-skin-ligth py-2 rounded-lg  text-skin-base mt-32 mr-10 justify-center px-2 flex flex-col w-[120px] gap-2 drop-shadow-md">
                                <span 
                                    className="cursor-pointer flex gap-1 hover:bg-skin-base hover:text-skin-ligth px-1 rounded" 
                                ><UserCircleIcon className="h4 w-4"/>Mi Perfil</span>
                                <span 
                                    className="cursor-pointer flex gap-1 hover:bg-skin-base hover:text-skin-ligth px-1 rounded" 
                                ><MoonIcon className="h4 w-4"/>  Dark</span>
                                <span 
                                    className="cursor-pointer flex gap-1 hover:bg-skin-base hover:text-skin-ligth px-1 rounded" 
                                ><ArrowRightOnRectangleIcon className="h6 w-6"/></span>
                            </p>
                        }
                    </div>
                </div> 
            </nav>             
        </header>
    );
};

export default Header;



