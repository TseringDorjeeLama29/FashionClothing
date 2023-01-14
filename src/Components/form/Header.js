import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Search from '../ui/Search';

export default function Header({isSearchVisible}) {
    let toggleClassCheck = isSearchVisible ? ' active' : '';
      
  return (
    <>
        <div className="top py-2 ">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 text-center text-lg-start">
                        <ul>
                            <li><a href="mailto:fashion@domain.com">FASHION@DOMAIN.COM</a></li>
                            <li className='border-end border-start'><a href="tel:+ 9828057063">(+012) 3456 789</a></li>
                            <li className='top-font px-2'>MON - FRI & 08H30 - 17H30</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-lg-end text-center">
                        <ul>
                            <li><Link to={"/track"}>TRACK MY ORDER</Link></li>
                            <li className='border-end border-start'><Link to={"/privacy"}>TERM OF USE</Link></li>
                            <li><a href='https://goo.gl/maps/pp3rR7kthXBMzeGm6' target={"_blank"}>OUR LOCATION</a></li>
<<<<<<< HEAD
                            {/* <button className="btn btn-outline-danger" type="submit" onClick={() => handleVisibility()}>Search</button> */}
=======
                            <button className="btn " type="submit" onClick={() => handleVisibility()}><i class="bi bi-search"></i></button>
>>>>>>> dev-feature
                        </ul>
                    </div>
                </div>
            </div>
            

            <Search toggleClassCheck ={toggleClassCheck} />

              
              
        </div>
    </>
  )
}
