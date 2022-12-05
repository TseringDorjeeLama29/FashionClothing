import React from 'react'
import { Link } from 'react-router-dom'
import CategoryData from '../../Data.js/CategoryData'

export default function Categories() {
    return (
        <>
            <div className="">
                <h3 className='text-uppercase mb-3 '>Categories</h3>
                <ul className="list-group">
                    {CategoryData.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center"> <Link to={`/shopDetails/${item.category}`} className=" text-decoration-none text-dark">{item.category} </Link>
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
