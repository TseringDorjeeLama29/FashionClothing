import React from 'react'
import Header from './Components/Header'
import Navbars from './Components/Navbars'
import "./Style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Navbars />
      <Footer />
    </>
  )
}

