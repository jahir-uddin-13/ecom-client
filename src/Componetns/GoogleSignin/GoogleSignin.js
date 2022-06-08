import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import app from "../../FirebaseInit";


const auth = getAuth(app);
const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate;

    const googleSignIn = () =>{
        console.log('working');
        signInWithPopup(auth, provider) 
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            console.log('error' ,error)
         });
    }

    if(user){
        navigate('/');
    }
    return (
        <div>
            
        </div>
    );
};

export default GoogleSignin;