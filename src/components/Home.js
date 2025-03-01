import React, { Fragment, useState } from 'react'
import '../style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Link} from 'react-router-dom';

export let category;

function Home() {
  const[cvalue, cfu]= useState('');
  const getData = ()=>{
    category = cvalue;
  }

  return (
    <Fragment>

      <div className='container'>
        <div className='row d-flex justify-content-evenly'>
            <label for="formGroupExampleInput" class="form-label text-center p-2 mb-4">Search related Images</label>
          <div className='col-6'>
            <input type="text" className="form-control"  placeholder="A category in one word.." onInput={(e)=>{
              cfu(e.target.value);
            }} />
          </div>
          <div className='col-1'>
            <Link to={cvalue}><button type='button' className='btn btn-success' onClick={getData}>Search</button></Link>
            
            </div>
        </div>
      </div>

    </Fragment >
  )
}

export default Home