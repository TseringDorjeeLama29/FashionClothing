import React from 'react'

export default function Header() {
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
                            <li><a href="">TRACK MY ORDER</a></li>
                            <li className='border-end border-start'><a href="">TERM OF USE</a></li>
                            <li><a href="">OUR LOCATION</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
