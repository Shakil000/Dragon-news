import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold mb-5'>Login With</h1>
            <div className='flex flex-col gap-3 py-10'>
                <button className="btn"><FcGoogle /> Login with Google</button>
                <button className="btn"><VscGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;