import React, { useContext, useState } from 'react';
import { loginContext } from './Login';

const SignUp = () => {
    const [isSignIn, setSignIn] = useContext(loginContext)

    const style = {
        cursor: "Pointer",
        color: 'orangered',
    }

    const [formData, setFormData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const isEmailValid = /\S+@\S+\.\S+/.test(formData.email)
        // const isPassMatch = formData.password === formData.passwordSecond
        const isPassValid = formData.password.length > 5
        if (isEmailValid && isPassValid) {
            console.log('signing up with valid data')
        }
    }
    const handleInput = (e) => {
        const newFormData = { ...formData }
        newFormData[e.target.name] = e.target.value
        setFormData(newFormData)
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