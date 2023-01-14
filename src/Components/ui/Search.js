import React from 'react'

export default function Search({toggleClassCheck}) {
  return (
    <>
        <form id='search_button' className={`py-5 px-5 bg-white search_header ${toggleClassCheck}`} role="search">
                <input className="form-control me-2 bg-light py-3" type="search" placeholder="Search Product" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
    </>
  )
}
