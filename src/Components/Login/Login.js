import React, { createContext, useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

export const loginContext = createContext()

// Email Sign In Function
const SignIn = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const from = props.location;
    const history = useHistory()
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
                history.push(from)
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
                <button className='loginbtn' onClick={handleSubmit}>Login</button>
            </form>
            <h3>Don't have an account? <span style={style} onClick={() => setSignIn(!isSignIn)}>Register</span></h3>
        </div>
    );
};


// Email sign Up Function

const SignUp = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const from = props.location;
    const history = useHistory()

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
        console.log('creating account')
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const signUpUser = {
                    displayName: user.name,
                    email: user.email
                }
                setLoggedInUser(signUpUser)
                history.push(from)
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input onChange={handleInput} required type="text" name='name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input onChange={handleInput} type="email" required name='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input onChange={handleInput} name='password' required type="password" />
                </div>
                <button className='loginbtn' onClick={handleSubmit}>Sign Up</button>
            </form>
            <h3>Already have an account? <span style={style} onClick={() => setSignIn(!isSignIn)}>Login</span></h3>
        </div>
    );
};


const Login = () => {
    const [IsSignIn, setSignIn] = useState(true)
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
                console.log(from)
                history.replace(from)
            }).then(() => {
                console.log('login succesful. ', history)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    return (
        <div className="login-page">
            <div className='login-box'>
                <loginContext.Provider value={[IsSignIn, setSignIn, from]}>
                    {
                        IsSignIn ? <SignIn location={from}></SignIn> : <SignUp location={from}></SignUp>
                    }
                </loginContext.Provider>
            </div>
            <button className='googlebtn' onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;