import React from 'react'
import logo from "../assets/imgs/logo2.png"

export default function Navbar() {
    return (
        <div className='flex w-screen h-[10vh] border-b-[1px] items-center justify-between px-10 '>
            <div>
                <img src={logo} alt="" height={75} width={75}/>
            </div>
            <div className='flex flex-row sm:gap-7 md:gap-10'>
                <button className='rounded-xl bg-green-500 text-white flex items-center justify-center w-[13vh] h-[4vh] text-sm shadow-zinc-400 shadow-md transition hover:shadow-xl hover:shadow-zinc-400  '>Criar Produto</button>
                <button className='rounded-xl bg-green-500 text-white flex items-center justify-center w-[13vh] h-[4vh] text-sm shadow-zinc-400 shadow-md transition hover:shadow-xl hover:shadow-zinc-400  '>Criar Cliente</button>
            </div>
        </div>
    )
}
  