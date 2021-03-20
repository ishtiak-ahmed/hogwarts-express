import React, { useContext, useState } from 'react';
import { loginContext } from './Login';
import firebase from "firebase/app";
import "firebase/auth";

const SignUp = () => {
    const [isSignIn, setSignIn] = useContext(loginContext)

    // Span Text Style
    const style = {
        cursor: "Pointer",
        color: 'orangered',
    }

    // Read Formdata
    const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const isEmailValid = /\S+@\S+\.\S+/.test(formData.email)
        // const isPassMatch = formData.password === formData.passwordSecond
        const isPassValid = formData.password.length > 5
        if (isEmailValid && isPassValid) {
            console.log('creating account')
            createAccount()
        }
    }

    // Handle Form Input
    const handleInput = (e) => {
        const newFormData = { ...formData }
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
    }

    // Create New User
    const createAccount = () => {
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Account created succesfully', user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div>
            <h2>Create an account</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleInput} type="text" name='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} type="email" name='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput} name='password' type="password" />
                </div>
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
            <h2>Already have an account? <span style={style} onClick={() => setSignIn(!isSignIn)}>Login</span></h2>

        </div>
    );
};

export default SignUp;