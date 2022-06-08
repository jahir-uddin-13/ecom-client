import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../FirebaseInit";


const auth = getAuth(app);
const useGoogleSignin = () => {

    const provider = new GoogleAuthProvider();
    

    
        console.log('working');
        signInWithPopup(auth, provider) 
        .then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            console.log('error' ,error)
         });
    
};

export default useGoogleSignin;