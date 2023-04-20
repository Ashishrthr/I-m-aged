import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';

function MyBootForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
       
        <Fragment>
            <section className='container-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="exampleInputtext1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputtext1"{...register("Name", { required: true })} />
                        {errors.Name && <span className='text-danger'>You enter wrong name</span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"{...register("Email", { required: true })} />
                        {errors.Email && <span className='text-danger'>You enter wrong Email</span>}
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"{...register("Password", { required: true })} />
                        {errors.Password && <span className='text-danger'>Password cant remain blanck</span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputtext2" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputtext2"{...register("Address", { required: true })} />
                        {errors.Address && <span className='text-danger'>You enter wrong Address</span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputnumber1" className="form-label">Contact Details</label>
                        <input type="number" className="form-control" id="exampleInputnumber1"{...register("Contact", { required: true })} />
                        {errors.Contact && <span className='text-danger'>You enter wrong mobile number</span>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Apply terms</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </Fragment>
    )
}

export default MyBootForm