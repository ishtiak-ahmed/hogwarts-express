import React, { useState } from 'react';

const SignIn = () => {

    const style = {
        cursor: "Pointer",
        color: 'orangered',
    }
    const [signInPage, setSignInPage] = useState(true)

    const handleInput = () => {
        console.log('handling input')
    }


    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="form-floating">
                    <input type="email" onChange={handleInput} className='form-control' name='email' />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" onChange={handleInput} className='form-control' name='password' />
                    <label htmlFor="password">Password</label>
                </div>
                <button>Login</button>
            </form>
            <h2>Don't have an account? <span style={style} onClick={() => setSignInPage(!signInPage)}>Register</span></h2>
        </div>
    );
};

export default SignIn;