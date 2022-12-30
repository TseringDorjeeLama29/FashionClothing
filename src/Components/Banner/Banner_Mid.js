import React, { useEffect, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import axios from "axios";
import Sponsor from '../../Data.js/Sponsor';

export default function Banner_Mid() {
  let [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                // console.log(res.data);
                setProduct(res.data)
            });
    })
  return (
    <>
      <div className="container-fluid banner_mid overflow-hidden my-5">
        {/* <img src={require('../Assets/img/deal-bg.jpg')} alt="" className='w-100'/> */}
      </div>
      <div className="container mt-5">
        <h2 className='text-uppercase text-center fw-bolder py-3 mb-3'>From Our blog</h2>
      <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                     {product.map((item) => (
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-lg-4 py-2">
                                <CardGroup className=' swipper_image '>
                                <Card className='px-5 product-img'>
                                    <Card.Img variant="top" src={item.image} className="w-100" />
                                </Card>
                                <Card.Body>
                                    <Card.Title><Link to={`/productDetails/${item.id}`} className='product_title text-decoration-none text-dark fs-6'>{item.title}</Link></Card.Title>
                                    <Card.Text className='py-2'>
                                        $ {item.price}
                                        <p className='text-warning'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                                    </Card.Text>
                                </Card.Body>
                            </CardGroup>
                                </div>
                            </div>
                        </SwiperSlide>
                     ))}                                
                  </Swiper>
      </div>
      <div className="container border-top border-dark p-3">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Sponsor.map((value) => (
            <SwiperSlide><img src={value.image} alt="" className='w-100' /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
