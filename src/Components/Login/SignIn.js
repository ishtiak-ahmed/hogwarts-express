import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { loginContext } from './Login';


const SignIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const style = {
        cursor: "Pointer",
        color: 'orangered',
    }
    const [isSignIn, setSignIn] = useContext(loginContext)

    const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmail()
    }
    const handleInput = (e) => {
        const newFormData = { ...formData }
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }
    const signInWithEmail = () => {
        firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then((res) => {
                const { displayName, email } = res.user
                const newUser = { displayName, email }
                console.log(displayName, email)
                setLoggedInUser(newUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <label htmlFor="email">Email :</label>
                    <input required type="email" onChange={handleInput} className='form-control' name='email' />
                </div>
                <div className="form-floating">
                    <label htmlFor="password">Password :</label>
                    <input type="password" required onChange={handleInput} className='form-control' name='password' />
                </div>
                <button>Login</button>
            </form>
            <h2>Don't have an account? <span style={style} onClick={() => setSignIn(!isSignIn)}>Register</span></h2>
        </div>
    );
};

export default SignIn;