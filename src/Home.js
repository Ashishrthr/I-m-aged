import React, { Fragment } from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { AiFillApple,GiArchaeopteryxFossil } from "react-icons/gi";


function Home() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand text-decoration-none lh-1 ms-3 me-5 my-0 px-0 pt-0 fs-3" to="#"><span className='homeicn'><GiArchaeopteryxFossil/></span></a>
          <button className="navbar-toggler nav-toglebtn-shadow bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" to="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-success" to="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" to="#">Action</a></li>
                  <li><a className="dropdown-item" to="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" to="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* end of navbar */}


      {/* start of slider 
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/imges/img1.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src="src/imges/img2.jpg" className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item">
            <img src="src/imges/img3.jpeg" className="d-block w-100" alt=""/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      */}


    </Fragment>
  )
}

export default Home