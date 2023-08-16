import React, { useState } from 'react';
import logo from "../../assets/imgs/logo2.png";
import { BsSearch } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CSSTransition } from 'react-transition-group';
import "./navbar.css"
import ModalLogin from '../modal/ModalLogin';
import ModalRegister from '../modal/ModalRegister';


export default function Navbar() {
    const [open, setIsOpen] = useState(false);
    const [showModalLogin, setShowModalViewLogin] = useState(false);
    const [showModalRegister, setShowModalViewRegister] = useState(false);

    const openMenu = () => {
        setIsOpen((valor) => !valor);
    };

    const handleOpenModal = (name) => {
        name === "Login"
            ? setShowModalViewLogin(true)
            : setShowModalViewRegister(true);
    };

    const handleCloseModal = (name) => {
        name === "Login"
            ? setShowModalViewLogin(false)
            : setShowModalViewRegister(false);
    };



    return (
        <div className='flex w-screen h-[10vh] border-b-[1px] items-center justify-between px-10 '>
            <div className='w-[15%]'>
                <img src={logo} alt="" height={75} width={75} />
            </div>

            <div className='flex items-center justify-center w-[100%]'>
                <div className='flex items-center justify-start border-[1px] h-[5vh] w-[60vh] px-2 rounded-md'>
                    <BsSearch size={20} className="absolute" />
                    <input type="text" name="" id="" className='w-[60vh] px-10 h-[4vh] bg-transparent border-none outline-none' placeholder='Busque usando vírgula, ex: cerveja, Leite' />
                </div>
            </div>

            <div className='flex flex-row sm:gap-7 md:gap-10'>
                <button onClick={openMenu} className='rounded-xl bg-green-500 text-white flex items-center justify-center w-[6vh] h-[4vh] text-md shadow-zinc-400 shadow-md transition hover:shadow-xl hover:shadow-zinc-400'>
                    <GoPerson size={20} />
                    <RxHamburgerMenu size={20} />
                </button>
                {open && (
                    <>
                        <div className="bg-white  w-[150px] left-[88%]  absolute top-20 mr-10 flex flex-col items-center gap-3 shadow-lg transition hover:shadow-2xl rounded-md py-3 ">
                            <div
                                className=" w-[100%] flex items-center justify-center cursor-pointer"
                                onClick={() => handleOpenModal("Login")}
                            >
                                Login
                            </div>
                            <div
                                className=" w-[100%] flex items-center justify-center cursor-pointer"
                                onClick={() => handleOpenModal("Registro")}
                            >
                                Registro
                            </div>
                        </div>
                    </>
                )}
            </div>
            {showModalLogin && (
                <>
                    <ModalLogin
                        close={showModalLogin}
                        setClose={setShowModalViewLogin}
                        handleClose={() => handleCloseModal("Login")}
                    />
                </>
            )}

            {showModalRegister && (
                <>
                    <ModalRegister handleClose={() => handleCloseModal("Registro")} />
                </>
            )}
        </div>
    );
}
