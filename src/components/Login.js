import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "./Home.js"

function Login() {
  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-warning">
        <div class="modal-header">
          <h5 class="modal-title text-success" id="staticBackdropLabel">Login</h5>
          <button type="button" class="btn-close text-success" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {/* log in form */}
          <form>
            <div class="mb-3 ">
              <label for="exampleInputEmail1" class="form-label text-success">Email address</label>
              <input type="email" class="form-control bg1" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Password</label>
              <input type="password" class="form-control bg1 text-white" id="exampleInputPassword1" />
            </div>
            <Link className='regist' to="CreateAccount">Create New Account</Link>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login