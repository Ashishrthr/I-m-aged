import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiArchaeopteryxFossil } from "react-icons/gi";

function Nav() {
  const [searchv, searchf] = useState('');
  const getData = () => {
    console.log(searchv)
  }
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-decoration-none lh-1 ms-3 me-5 my-0 px-0 pt-0 fs-3" to=""><span className='homeicn'><GiArchaeopteryxFossil /></span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success" to="datalist">JSON Data</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Components
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="apidata">Axios api</Link></li>
                  <li><Link className="dropdown-item" to="fillform">Form </Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="viewchart">Chart</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="lazzypg">Lazy Page</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabiIndex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex">

              <input className="form-control me-2" type="search" placeholder="Search A Category" aria-label="Search" onInput={(a) => {
                searchf(a.target.value);

              }} />
              <Link to={searchv}> <button className="btn btn-outline-success me-2" type="submit" onClick={getData} >Search</button></Link>
              <Link to="login"><button className='btn btn-outline-success' type='button'>Login</button></Link>

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
