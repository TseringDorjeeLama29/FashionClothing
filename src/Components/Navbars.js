import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/home/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Shop from './ui/Shop';
import ShopDetails from '../Components/Banner/content/ShopDetails';
import Product from './Banner/Product';
import ShopCategory from './Banner/content/ShopCategory';
import ProductDetails from '../Pages/Details/ProductDetails';
import ShopCategoryDetails from '../Pages/Details/ShopCategoryDetails';
import TrackOrder from '../Pages/Formpages/TrackOrder';
import PrivacyPolicy from '../Pages/Formpages/PrivacyPolicy';
import Contact from '../Pages/Details/Contact';


export default function Navbars() {
    return (
        <>
            <div className="bg-light py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 text-center text-lg-start">
                            <Link to="/"><img src={require('../Assets/img/logo.png')} alt="logo" className='w-50 img-fluid' /></Link>
                        </div>
                        <div className="col-lg-6 text-uppercase">
                        <nav className="navbar navbar-expand-lg bg-light ">
                                <div className="container-fluid">    
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>              
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown me-4">
                                                <Link className="nav-link dropdown-toggle text-dark fw-semibold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Home
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown me-4">
                                                <Link className="nav-link dropdown-toggle text-dark fw-semibold" to={"/shop"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Shop
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to={"/shop"}>Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown me-4">
                                                <Link className="nav-link dropdown-toggle text-dark fw-semibold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Blog
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown me-4">
                                                <Link className="nav-link dropdown-toggle text-dark fw-semibold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Pages
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link className="nav-link active me-4 fw-semibold" aria-current="page" to={"/contact"}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3 nav-right text-end ">
                            <ul>
                                <li><a href=""><i class="fas fa-search"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                <li className='position-relative'><a href="" className='cart-1'><i class="fa-solid fa-heart "></i></a></li>
                                <li className='position-relative'><a href="" className='cart-2'><i class="fa-solid fa-cart-shopping"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopCategory />} />
                <Route path="/shopDetails/:detailName" element={<ShopDetails />} />
                <Route path="/productDetails/:productId" element={<ProductDetails />} />
                <Route path="/shopCategoryDetails/:categoryDetailsId" element={<ShopCategoryDetails />} />
                <Route path='/track' element={<TrackOrder />} />
                <Route path='/privacy' element={<PrivacyPolicy />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}
