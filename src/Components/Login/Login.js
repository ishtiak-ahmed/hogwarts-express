import React, { useContext } from 'react';
import firebase from "firebase/app";

import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleLogin = () => {
        console.log('loging with google')
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                const { displayName, email } = user
                const signedInUser = { displayName, email }
                console.log(signedInUser)
                setLoggedInUser(signedInUser)
                history.replace(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;