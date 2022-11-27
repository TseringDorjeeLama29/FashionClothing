import React, { useEffect, useState } from 'react'
import ShopData from '../Data.js/ShopData'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ShopCategory from './ShopCategory';

export default function Shop() {
  return (
    <>
          <div className="container-fluid">
              {ShopData.map((item) => (
                  <div className="shop text-center position-relative">
                      <img src={item.image} alt="" className='w-100' />
                      <h2 className='position-absolute  text-center start-50 text-light'>{item.title}</h2>
                      <Breadcrumb className='position-absolute top-50 start-50 shop-breadcrumb '>
                          <Breadcrumb.Item href="#" className='text-decoration-none b text-light'>Home</Breadcrumb.Item>
                          <Breadcrumb.Item active className='text-light'>{item.title}</Breadcrumb.Item>
                      </Breadcrumb>
                  </div>
            ))}
        </div>
            {/* <ShopCategory /> */}
    </>
  )
}
