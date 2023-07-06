import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login =()=> {

    const {handleLogin}= useAuth0();

    
        return (
            <button onClick={()=> handleLogin()}>
                Login
            </button>
         )   
}
 
export default Login