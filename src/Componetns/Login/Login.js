import { getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Toast } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from '../../FirebaseInit';
import useGoogleSignin from "../../hooks/useGoogleSignin";
import './Login.css';

const auth = getAuth(app);
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        // signInWithEmailAndPassword(email, password);
        signInWithEmailAndPassword(email, password);

    }






    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New user? <Link className='form-link' to="/signup">Create an account</Link>
                </p>

                <button onClick={useGoogleSignin} className='btn btn-primary p-2 mb-5' >Use Google to login</button>
                <br></br>
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Do you want to foget password?</strong>
                        
                    </Toast.Header>
                    <Toast.Body><Button>Forget Password</Button></Toast.Body>
                </Toast>
            </div>
        </div>
    );
};

export default Login;