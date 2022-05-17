import Form from '../components/Form'
import styles from '../styles/Register.module.css'
import Image from "next/image"
import Link from 'next/link'
import React from "react";

export default function Login({ /*csrfToken*/ }) {
  return (
    <div className={styles.container}>
      <div className={styles.userNavbar}>
        <Link passHref href='/'>
          Jerbooking
        </Link>
        <img src="https://q-xx.bstatic.com/backend_static/common/flags/new/48/it.png" alt=""></img>
      </div>
        <div className={styles.wrapper}>  
          <Form type={'login'} /*csrfToken={csrfToken}*/ />
        </div>
    </div>
  )
}