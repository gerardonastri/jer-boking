import React from 'react'
import styles from '../styles/Email.module.css'

const Email = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Save time, save money!</h1>
            <p>Sign up and we'll send the best deals to you</p>
            <div className={styles.input}>
                <input type="text" name="" id="" />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Email