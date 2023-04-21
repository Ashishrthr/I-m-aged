import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { GiArchaeopteryxFossil } from "react-icons/gi";
import "../style.css"


function Createacc() {
  return (
    <Fragment>
      <section className='container-fluid border-box'>
        <div className='row'>
          <div className='col-md-7 custom-class'>
            <div className='p-3 overflow-hidden text-center'>
              <GiArchaeopteryxFossil className='logigo text-success  ' />
            </div>
          </div>
          <div className='col-md-5 col-sm-8 col-9 mx-auto'>
            <div className='p-2  col-lg-10 col-xxl-8 mx-auto'>
              <form>
                <div className='h1 text-center my-4' style={{ color: '#198754' }}>Create Account</div>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label text-success">Full name</label>
                  <input type="text" class="form-control" id="exampleInputName1" />
                </div>
                {/* Radio buttons */}
                <div className='my-4'>
                <div class="form-check-inline">
                  <input class="btn-check" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="btn btn-outline-success" for="flexRadioDefault1">
                      Male
                    </label>
                </div>
                <div class="form-check-inline">
                  <input class="btn-check" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="btn btn-outline-success" for="flexRadioDefault2">
                      Female
                    </label>
                </div>
                </div>
                {/* end of radios */}
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-success">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-success">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-5">
                  <label for="exampleInputPassword1" class="form-label text-success">Confirm Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword2" />
                </div>
                <button type="submit" class="btn container-fluid btn-success">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Createacc