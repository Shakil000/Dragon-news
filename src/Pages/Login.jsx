import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const [errors, setErrors] = useState();

  // ! use context
  const {createLogin, setUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")
    // console.log({email,password});

    // ? call login function
    createLogin(email,password)
    .then(result => {
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/") 
      // console.log(user);
    })
    .catch((error) => {
      // const errorcode = error.errorCode;
      // const errorMessage = error.errorMessage;
      setErrors({...errors, login:error.code})
      // console.log(errorcode,errorMessage); 
    })
  }
    return (
        <div className='min-h-screen items-center justify-center flex'>
           <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none">
            <h2 className='text-2xl font-semibold mt-10 text-center'>Login your account</h2>
            <p className='border m-10'></p>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-red-50 rounded-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-red-50 rounded-none" required />
          {
            errors &&  <label className="label font-bold text-red-600">{errors.login}</label>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
        <p className='text-gray-400 text-center'>Don't Have An Account ? <Link to="/auth/register" className='text-red-600'>Register</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Login;