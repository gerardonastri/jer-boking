import React from 'react'
import styles from '../styles/Guests.module.css'

const Guests = () => {
  return (
   <div className={styles.container}>
     <h2>Homes guests love</h2>
     <div className={styles.homesWrapper}>
        <div className={styles.home}>
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
          <h4>Aparthotel Stare Miasto</h4>
          <span className={styles.location}>Madrid</span>
          <span className={styles.price}>Starting from $120</span>
          <div className={styles.rating}>
            <span className={styles.number}>8.9</span>
            <span className={styles.desc}>Excellent</span>
          </div>
        </div>
        <div className={styles.home}>
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
          <h4>Aparthotel Stare Miasto</h4>
          <span className={styles.location}>Madrid</span>
          <span className={styles.price}>Starting from $120</span>
          <div className={styles.rating}>
            <span className={styles.number}>8.9</span>
            <span className={styles.desc}>Excellent</span>
          </div>
        </div>
        <div className={styles.home}>
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
          <h4>Aparthotel Stare Miasto</h4>
          <span className={styles.location}>Madrid</span>
          <span className={styles.price}>Starting from $120</span>
          <div className={styles.rating}>
            <span className={styles.number}>8.9</span>
            <span className={styles.desc}>Excellent</span>
          </div>
        </div>
        <div className={styles.home}>
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
          <h4>Aparthotel Stare Miasto</h4>
          <span className={styles.location}>Madrid</span>
          <span className={styles.price}>Starting from $120</span>
          <div className={styles.rating}>
            <span className={styles.number}>8.9</span>
            <span className={styles.desc}>Excellent</span>
          </div>
        </div>
     </div>
   </div>
  )
}

export default Guests