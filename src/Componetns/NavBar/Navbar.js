import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../FirebaseInit';
import './NavBar.css';

const auth = getAuth(app);

const Navbar = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            
            <div>
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/checkout">Checkout</Link>
                
                {
                    user ?
                
                    <button onClick={handleSignOut} className='btn btn-secondary'>Sign out</button>
                    :
                    <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Navbar;