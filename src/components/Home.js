import React, { Fragment, useState } from 'react'
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Link} from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import Imagesdemo from './Imagesdemo';

function Home() {

  const[cvalue, cfu]= useState('');
  const getData = ()=>{
    console.log(cvalue);
  }

  return (
    <Fragment>

      <div className='container-fluid'>
        <div className='row my-7'>
        <div className='col-12 text-center'>
            <label for="formGroupExampleInput" class="form-label text-success text-break text-uppercase display-1">Search Images in one category</label>
            </div>
            </div>
        <div className='row justify-content-center h-4'>
          <div className='form-floating col-md-7 col-6  pe-0'>
            <input type="text" className="form-control text-light border-success" id="landSearch" placeholder='A Category in ONE word...' onInput={(e)=>{
              cfu(e.target.value);
            }} /><label for="landSearch" className="text-success fs-7 fs-lg ms-3">A Category in ONE word...</label>
          </div>
          <div className='col-md-1 col-2 ps-0'>
            <Link to={cvalue}><button type='button' className='btn btn-success fs-5 h-100 w-100 brdradius ps-md-2 ps-1' onClick={getData}><FiSearch /></button></Link>
            
            </div>
        </div>
        <div className='row'>
          <div className='co-12 border mt-7 '>
            <Imagesdemo/>
          </div>
        </div>
      </div>

    </Fragment >
  )
}

export default Home