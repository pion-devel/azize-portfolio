import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper from 'swiper';
// import {  Pagination} from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

// // Import Swiper styles
// import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
avatar: AVTR1,
name: "jessica Diallo",
review: "Reprehenderit voluptate ipsum proident est irure aliqua Lorem ipsum est exercitation nulla deserunt est magna. Elit dolore cillum pariatur dolore. Veniam aliqua cillum eiusmod et sint. Consequat sunt aliqua ut eu anim veniam ut voluptate reprehenderit qui proident nostrud. Enim adipisicing laboris culpa aliqua repreh."
},

{
  avatar: AVTR2,
  name: "Narwed RACHIDI",
  review: "Reprehenderit voluptate ipsum proident est irure aliqua Lorem ipsum est exercitation nulla deserunt est magna. Elit dolore cillum pariatur dolore. Veniam aliqua cillum eiusmod et sint. Consequat sunt aliqua ut eu anim veniam ut voluptate reprehenderit qui proident nostrud. Enim adipisicing laboris culpa aliqua repreh."
  },

  {
    avatar: AVTR3,
    name: "David RENARD",
    review: "Reprehenderit voluptate ipsum proident est irure aliqua Lorem ipsum est exercitation nulla deserunt est magna. Elit dolore cillum pariatur dolore. Veniam aliqua cillum eiusmod et sint. Consequat sunt aliqua ut eu anim veniam ut voluptate reprehenderit qui proident nostrud. Enim adipisicing laboris culpa aliqua repreh."
    },

    {
      avatar: AVTR4,
      name: "Sanna CHAKROUN",
      review: "Reprehenderit voluptate ipsum proident est irure aliqua Lorem ipsum est exercitation nulla deserunt est magna. Elit dolore cillum pariatur dolore. Veniam aliqua cillum eiusmod et sint. Consequat sunt aliqua ut eu anim veniam ut voluptate reprehenderit qui proident nostrud. Enim adipisicing laboris culpa aliqua repreh."
      },


]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className=' container testimonials__container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
      {
        data.map(({avatar, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} />
          </div>
          <h5 className='Client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })
      }
       
      </Swiper>

    </section>
  )
}

export default Testimonials