import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [visible, setVisible] = useState(true);
    

    const handleVisibility = () => {
        setVisible(prev => !prev);
      };
    
      

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
                            <button className="btn btn-outline-danger" type="submit" onClick={() => handleVisibility()}>Search</button>
                        </ul>
                    </div>
                </div>
            </div>
            <aside className={visible ? "close" : "active"}>
            <form id='search_button' className="py-5 px-5 bg-white search_header " role="search">
                  <input className="form-control me-2 bg-light py-3" type="search" placeholder="Search Product" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </aside>
              
              
        </div>
    </>
  )
}
