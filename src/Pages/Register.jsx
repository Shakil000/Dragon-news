import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

  const [errors, setErrors] = useState();
// ! user context
const {createNewUser,setUser} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();


  // ! Form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
   if(name.length < 5){
    setErrors({...errors, name:"Name should be more then five character"});
    return;
   }
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    if(email === ''){
      setErrors({...errors, email:"Invalid email"})
      return;
    }
    const password = form.get("password");
    // console.log({name,photoUrl,email,password});

    // ! call create User function here
    createNewUser(email,password)
     .then((result) => {
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/") 
      // console.log(user);
    })
    .catch((error) => {

      // const errorCode = error.errorCode;
      // const errorMessage = error.errorMessage;
      // console.log(errorCode,errorMessage);
    })
  }
    return (
        <div className='min-h-screen'>
        <div className="max-w-xl mx-auto mt-10 p-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
      <form onSubmit={handleSubmit} className=''>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          </div>
          {
            errors &&  <label className=" text-red-700 font-bold">{errors.name}</label>
          }

        {/* Photo URL Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="photoUrl">Photo URL</label>
          <input
            type="text"
            id="photoUrl"
            name="photoUrl"
            // value={formData.photoUrl}
            // onChange={handleChange}
            placeholder="Enter photo URL"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {
          errors && 
          <label className=" text-red-700">{errors.email}</label>
        }

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
            //   checked={formData.termsAccepted}
            //   onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700">Accept <span className="font-semibold">Terms & Conditions</span></span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
        >
          Register
        </button>
      </form>
    </div>
    </div>
    );
};

export default Register;