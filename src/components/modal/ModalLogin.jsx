import React, { useState } from 'react'
import logo from "../../assets/imgs/logo2.png"
import { IoMdClose } from 'react-icons/io';
import "./ModalAnimation.css";

export default function ModalLogin({ handleClose }) {

    const [closeAnimation, setCloseAnimation] = useState(false)

    const handleCloseAnimation = () => {
        setCloseAnimation(true)
    }

    const animationStyle = closeAnimation === false
        ? { animation: 'slideOutToTop 0.2s ' }
        : { animation: 'slideOutBottom 0.5s ' };



    return (
        <div className='absolute z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50  ' style={animationStyle}>
            <div className='bg-white w-[60vh] h-[70vh] rounded-md'>
                <header className='h-[10%] flex flex-row items-center border-b-[1px] justify-between px-10 '>
                    <div className=' '><img src={logo} alt="" height={50} width={50} /></div>
                    <div className='text-xl cursor-pointer' onClick={
                        handleClose

                    }  >
                        <IoMdClose />
                    </div>

                </header>
                <main className=' h-[88%]  '>
                    <div className='text-2xl flex items-end justify-center pt-7  h-[20%]'>Login</div>
                    <form action="" className='flex flex-col justify-evenly  py-14 items-center w-[100%] h-[68%]'>

                        <div className='flex flex-col gap-2'>
                            <div><label htmlFor="ip1">E-Mail:</label></div>
                            <div className='w-[40vh] border-green-400 border-[1px] flex items-center justify-center h-[50%] rounded-full transition shadow-green-200 shadow-md hover:shadow-lg hover:shadow-green-400 '><input type="text" placeholder='name@example.com..' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <div><label htmlFor="ip1">Password:</label></div>
                            <div className='w-[40vh] border-green-400 border-[1px] flex items-center justify-center h-[50%] rounded-full transition shadow-green-200 shadow-md hover:shadow-lg hover:shadow-green-400'><input type="password" placeholder='insira sua senha..' className='w-[93%] rounded-full h-[60%] border-white outline-0 bg-transparent p-3' /></div>

                        </div>

                        <div className='flex justify-between px-4 text-[14px] w-[70%] '>
                            <div>Lembrar</div>
                            <div>Esqueci minha Senha</div>
                        </div>
                        <div className='flex flex-col gap-2 pt-10 '>
                            <button className='border-green-400 rounded-full border-[1px] h-[4vh] w-[20vh] transition hover:text-white hover:bg-green-500'>Logar</button>
                        </div>
                    </form>
                </main>

            </div>
        </div>
    )
}



