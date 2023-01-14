import React, { useState } from 'react'
import Header from './Components/form/Header'
import Navbars from './Components/Navbars'
import "./Style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/form/Footer';


export default function App() {
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onPress = () => {
    console.log("search button pressed")
    setIsSearchVisible(isSearchVisible => !isSearchVisible)
  };

  return (
    <>
      <Header isSearchVisible = {isSearchVisible} />
      <Navbars onPress = {onPress} />
      <Footer />
    </>

  )
}

