import React from 'react';
import google from '../../../images/icon/google-logo.png';
import facebook from '../../../images/icon/facebook-logo.png';
import github from '../../../images/icon/github-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

      if(loading1 || loading2){
        return <Loading></Loading>
      }

      if (error1 || error2) {
           errorElement = 
                    <p className='text-danger'>Error: {error1?.message} {error2?.message}</p>               
        }
    
        if(user1 || user2){
            navigate('/Home');
        }
    

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='border'>
                <button
                    onClick={()=> signInWithGoogle()}
                    className='btn btn-primary w-75 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>                    
                </button>
                <button className='btn btn-primary w-75 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>                    
                </button>
                <button
                    onClick={()=> signInWithGithub()} className='btn btn-primary w-75 d-block mx-auto my-2'>
                    <img style={{width: '30px'}} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>                    
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
