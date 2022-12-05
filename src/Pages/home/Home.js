import React from 'react'
import Banner from './Banner'
import Category from '../../Components/Category'
import Product from '../../Components/Product'
import Banner_Mid from '../Banner_Mid'

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
