import React, { Fragment, useState } from 'react'
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Datalist from './Datalist';
// import Datalist from './Datalist';




function Home() {
  const [bgc, bgcf] = useState();
  const [tcl, tclf] = useState();
  const mytxtclr = (a) => {
    tclf(a.target.value)
  }
  const myclr = (a) => {
    bgcf(a.target.value)
    console.log(bgc)
  }
  return (
    <Fragment>
      <div style={{ backgroundColor: bgc, color: tcl }}>
        <fieldset>
          <legend>Change Body Color</legend>
          <input type='color' onInput={myclr} />
        </fieldset>
        <fieldset>
          <legend>Change Text Color</legend>
          <input type='color' onInput={mytxtclr} />
        </fieldset>
        <Datalist/>
      

      </div>
    </Fragment>
  )
}

export default Home