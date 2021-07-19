import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const signIn = e =>{
        e.preventDefault()
        // Firebase login part
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        
    } 

    const register = e =>{
        e.preventDefault()
        // Firebase register part
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                // Go to home page, after creating account 
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    } 

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png' alt=''>
                </img>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn}className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create Account on Amazon</button>
            </div>
        </div>
    )
}

export default Login
