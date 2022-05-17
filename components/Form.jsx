import styles from '../styles/Form.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState, useContext } from 'react'
import {axiosReq} from '../util/apiCalls'
import { useDispatch } from 'react-redux';
import {useRouter} from 'next/router'
import React from "react";
import {AuthContext} from '../context/authContext/AuthContext';
import {login} from '../context/authContext/apiCalls'

const Form = ({type}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    //const dispatch = useDispatch();
    const router = useRouter();
    const {dispatch} = useContext(AuthContext)

    const handleLogin =  async () => {
        login({email, password}, dispatch)
        await new Promise(done => setTimeout(() => done(), 1000));  
        router.push('/')
        
    }

    const handleRegister = async () => {
        try {
            const res = await axiosReq.post('register', {
                email,
                password,
                username
            });
            router.push('/login')
        } catch (error) {
            console.log(error);
        }
    } 

   return (
       <div className={styles.container}>
           <div className={styles.wrapper}>
            <h2>{type === 'login' ? 'Login' : 'Create an account'}</h2>
            <div className={styles.inputContainer}>
                {type === 'register' ? (
                    <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input className={styles.input} type="text" id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                ) : (
                    <></>
                )}
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.input} type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} min="6" />
                </div>
            </div>
            <button className={styles.button} onClick={type === 'login' ? handleLogin : handleRegister}>{type === 'login' ? 'Login' : 'Register'}</button>
            {type === 'login' ? (
                <>
                <span className={styles.redirect}>Don't have an account?</span>
                <Link className={styles.color} href={'/register'} passHref>
                    <span className={styles.color}>Sign up</span>
                </Link>
                </>
            ) : (
                <>
                <span className={styles.redirect}>Already have an account?</span>
                <Link className={styles.color} href={'/login'} passHref>
                <span className={styles.color}>Login</span>
                </Link>
                </>
            )}
           </div>
       </div>
   )
}

export default Form

