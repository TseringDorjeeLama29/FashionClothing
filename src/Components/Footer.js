import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
       <div className="container-fluid bg-light p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row ">
                            <div className="col-lg-6 footer-info">
                                <h5>STORE INFO</h5>
                                <ul className=''>
                                    <li className='list-unstyled '><a href="https://goo.gl/maps/Ks1if5mpdYdYuKPS8" className='text-decoration-none text-dark'><span className='text-dark'><i className="bi bi-house-door-fill me-2"></i></span>Boudha-6, kathmandu</a></li>
                                    <li className='list-unstyled '><a href="tel:+977 9828057063" className='text-decoration-none text-dark'><span className='text-dark'><i className="bi bi-telephone-fill me-2"></i></span>(+012) 3456 789</a></li>
                                    <li className='list-unstyled '><a href="mailto:fashion@domain.com" className='text-decoration-none text-dark'><span className='text-dark fw-bold me-2'>@</span> hello@domain.com</a></li>
                                    <li className='list-unstyled '><Link href="" className='text-decoration-none text-dark'></Link></li>
                                </ul>
                                <span className='border-seperator my-4'></span>
                                <div className="social-media">
                                    <ul>
                                        <li className='fw-semibold'>Socials :</li>
                                        <li><a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a></li>
                                        <li><a href="https://www.youtube.com/"><i className="bi bi-youtube text-danger"></i></a></li>
                                        <li><a href="https://www.pinterest.com/"><i className="bi bi-pinterest text-danger"></i></a></li>
                                        <li><a href="https://www.instagram.com/"><i className="bi bi-instagram text-danger"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 footer-a">
                                <h5>COMPANY</h5>
                                <ul>
                                    <li><Link to="">Careers</Link></li>
                                    <li><Link to="">Business with us</Link></li>
                                    <li><Link to="">Contact us</Link></li>
                                    <li><Link to="">About us</Link></li>
                                    <li><Link to="">FAQs</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 footer-a">
                                <h5>ACCOUNT</h5>
                                <ul>
                                    <li><Link to="">Careers</Link></li>
                                    <li><Link to="">Business with us</Link></li>
                                    <li><Link to="">Contact us</Link></li>
                                    <li><Link to="">About us</Link></li>
                                    <li><Link to="">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                                <h5>GET IN TOUCH</h5>
                                <p>Sign up to receive amazing offers & deals</p>
                                  <form>
                                      <div className="mb-3 d-inline-block">
                                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                          <input type="email" className="form-control d-inline-block" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                                      </div>
                                      <button type="submit" className="btn border-dark mx-4 text-uppercase d-inline-block"><Link className='text-decoration-none text-dark'>Subscribe</Link> </button>
                                  </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <div className="container-fluid bg-white p-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <p>Copyright &copy; 2021 <Link to={'/#'} className='text-dark text-decoration-none fw-semibold'>SNS Theme. </Link>All Right Reserved.</p>
                    </div>
                    <div className="footer-logo">
                       <img src={require('../Assets/img/payment.png')} alt="" />
                    </div>
                </div>
            </div>
       </div>

    </>
  )
}
