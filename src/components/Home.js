import React, { Fragment, useState } from 'react'
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import bgimg from "../imges/img1.jpg" 
import Datalist from './Datalist';
// import Datalist from './Datalist';




function Home() {
  // const [bgc, bgcf] = useState();
  // const [tcl, tclf] = useState();
  // const mytxtclr = (a) => {
  //   tclf(a.target.value)
  // }
  // const myclr = (a) => {
  //   bgcf(a.target.value)
  //   console.log(bgc)
  // }
  return (
    <Fragment>
      {/* <div style={{ backgroundColor: bgc, color: tcl }}>
        <fieldset>
          <legend>Change Body Color</legend>
          <input type='color' onInput={myclr} />
        </fieldset>
        <fieldset>
          <legend>Change Text Color</legend>
          <input type='color' onInput={mytxtclr} />
        </fieldset>
        
      

      </div> */}
      
      <div className='main w-100 '>
        <div className='block1'>
          <div className='px-1 container-lg block1-sub'><img src={bgimg} className='w-100' alt='img unavailable'/></div>
        </div>
        <div className='block2'>
          <div></div>
          <div></div>
        </div>
        <div className='block3'>
        <div></div>
        <div></div>
        </div>
        <div className='block4'>
        <div></div>
        <div></div>
        </div>
        <div className='block5'>
        <div></div>
        <div></div>
        </div>

      </div>
    </Fragment>
  )
}

export default Home