import React from 'react'

import {Swiper,SwiperSlide} from "swiper/react"




export default function Home() {

  const imgs = [
     {id : "1", img : "https://static.paodeacucar.com/static/pa/1691686571858-desk-230810-aniversario-cupom-60-desk-carrossel.jpg?im=Resize,width=1600"},
     {id : "2", img : "https://static.paodeacucar.com/static/pa/1691677525037-desk-230810-a-niversario-pao-carrossel-desk-papel.jpg?im=Resize,width=1600"},
     {id : "3", img : "https://static.paodeacucar.com/static/pa/1691634565198-desk-tv-flash-seara.jpg?im=Resize,width=1600"}
    ]





  return (
    <div className='h-screen w-screen'>
    <h1>Slider</h1>
    <Swiper>
        <SwiperSlide>

        </SwiperSlide>
    </Swiper>
    </div>
  )
}
