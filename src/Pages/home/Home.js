import React from 'react'
import Banner from './Banner'
import Category from '../../Components/Banner/Category'
import Product from '../../Components/Banner/Product'
import Banner_Mid from '../../Components/Banner/Banner_Mid'

export default function Home() {
  return (
    <>
        <Banner />
        <Category />      
        <Product /> 
        <Banner_Mid />
    </>
  )
}
