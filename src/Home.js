import React, { Fragment } from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

function Home() {
  return (
    <Fragment>
      <h1 className='frst'>this is react</h1>
      <h2 style={{ color: 'greenyellow' }}>this a paragraph line</h2>
      <p>sadfdfad safsfasdf saf saf asf safasf sf afasf sa sfsaf saf asf cxxfdfsdgdgdg dgdsgs</p>
      <h1>sdf</h1>
      <h4>ashish rathor</h4>
      <p className='text-primary'>this is from mac</p>
  <div className="card" style={{width: '18rem' }}>
        <img src="logo.svg" className="card-img-top" alt=""/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>

    </Fragment>
  )
}

export default Home