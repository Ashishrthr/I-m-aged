import React, { Fragment, useState } from 'react'
import { GiArchaeopteryxFossil } from "react-icons/gi";
import "../style.css"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Home from './Home';


function Login() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {if(JSON.parse(localStorage.getItem(`${data.loginEmail}`)).Email === data.loginEmail & JSON.parse(localStorage.getItem(`${data.loginEmail}`)).Password === data.loginPassword )
    {
        <Home/>
    }};
    const [a, b] = useState(String);
    const myfun = (d) => {
        b(d.target.value);

    }
    return (
        <Fragment>
            <section className='container-fluid border-box'>
                <div className='row '>
                    <div className='col-md-7 custom-class'>
                        <div className='p-3 overflow-hidden text-center' style={{ backgroundClip: 'padding-box' }}>
                            <GiArchaeopteryxFossil className='logigo text-success  ' />
                        </div>
                    </div>
                    <div className='col-md-5 col-sm-9 col-10 mx-auto align-self-center align-self-xxl-start'>
                        <div className='p-2 col-lg-10 col-xxl-8 mx-auto'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='h1 text-center my-4' style={{ color: '#198754' }}>Login</div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label text-success">Email address</label>
                                    <input {...register("loginEmail")} type="text" value={a} class="form-control inputbrdr" onInput={myfun} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-2">
                                    <label for="exampleInputPassword1" class="form-label text-success">Password</label>
                                    <input type="password" class="form-control inputbrdr" id="exampleInputPassword1" {...register("loginPassword")} />
                                </div>
                                <div class="mb-5">
                                    <Link className='text-decoration-none link-success text-hover' to="../CreateNewAccount">Create New Account</Link>
                                </div>
                                <button type="submit" class="btn container-fluid btn-success">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login