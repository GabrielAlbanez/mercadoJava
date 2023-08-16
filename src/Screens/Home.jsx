import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"




export default function Home() {

  const imgs = [
    { id: "1", img: "https://static.paodeacucar.com/static/pa/1691686571858-desk-230810-aniversario-cupom-60-desk-carrossel.jpg?im=Resize,width=1600" },
    { id: "2", img: "https://static.paodeacucar.com/static/pa/1691677525037-desk-230810-a-niversario-pao-carrossel-desk-papel.jpg?im=Resize,width=1600" },
    { id: "3", img: "https://static.paodeacucar.com/static/pa/1691634565198-desk-tv-flash-seara.jpg?im=Resize,width=1600" }
  ]





  return (
    <div className='h-screen w-screen px-36'>
      <img src="https://static.paodeacucar.com/static/pa/1691082871920-desk-microsoft-teams-image.png?im=Resize,width=1600" className='w-screen object-cover pt-10' alt="" />
      <Swiper
      slidesPerView={1}
      pagination={{ clickable : true }}

      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >

        {imgs.map((img) => (
          <SwiperSlide key={img.id} className="pt-10">
            <img src={img.img} alt="img" className='w-screen h-[50%] object-cover'/>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}
