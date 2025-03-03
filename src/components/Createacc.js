import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { GiArchaeopteryxFossil } from "react-icons/gi";
import "../style.css"
import { useForm } from 'react-hook-form';


function Createacc() {
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = (data) => localStorage.setItem(`${data.Email}`, JSON.stringify(data));
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='h1 text-center text-success my-4'>Create Account</div>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label text-success">Full name</label>
                  <input type="text" class="form-control" {...register("Fullname")} />
                </div>
                {/* Radio buttons */}
                <div className='my-4'>
                  <div class="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={'male'} {...register("Sex")} />
                    <label className="form-check-label" for="inlineRadio1" >Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={'Female'} {...register("Sex")} />
                    <label className="form-check-label" for="inlineRadio2">Female</label>
                  </div>
                </div>
                {/* end of radios */}
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label text-success">Email address</label>
                  <input type="email" className="form-control" {...register("Email")} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-success">Password</label>
                  <input type="password" className="form-control" {...register("Password")} />
                </div>
                <div className="mb-5">
                  <label for="exampleInputPassword1" className="form-label text-success">Confirm Password</label>
                  <input type="password" className="form-control" {...register("ConfirmedPassword")} />
                </div>
                <button type="submit" className="btn container-fluid btn-success">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Createacc