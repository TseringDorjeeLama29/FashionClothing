import React from 'react'
import CatData from '../Data.js/CatData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Category() {
  return (
    <>
        <div className="container">
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                     {CatData.map((value) => (
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-lg-4 py-5">
                                    <div className="category-width position-relative">
                                        <img src={value.image} alt="" className='w-100'/>
                                        <div className="category-desc position-absolute  px-5">
                                        <h3 className='text-light'>{value.title}</h3>
                                        <p className='py-2 browser-links'><a href="" className='text-light text-decoration-none py-3'>{value.body} <i class="bi bi-arrow-right"></i></a></p>
                                        </div>                                     
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                     ))}                                
                  </Swiper>
        </div>
    </>
  )
}
