import React from 'react'
import styles from '../styles/SearchItem.module.css'
import Link from 'next/link'

const SearchItem = ({hotel}) => {

    
  return (
    <div className={styles.container}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" />
        <div className={styles.info}>
            <h2>{hotel.name}</h2>
            <span className={styles.distance}>{hotel.distance}m from center</span>
            <button>Free airport taxi</button>
            <p className={styles.desc}>{hotel.description}</p>
            <span className={styles.stuff}>Entire studio · 1 bathroom · 21m 1 full bed</span>
            <span className={styles.cancellation}>Free cancellation</span>
            <p className={styles.cancel}>You can cancel later, so lock this great price today</p>
        </div>
        <div className={styles.rating}>
            <div className={styles.up}>
                <h3>Excellent</h3>
                <span className={styles.number}>8.9</span>
            </div>
            <div className={styles.down}>
                <h3>${hotel.cheapestPrice}</h3>
                <span>Includes taxes and fees</span>
                <Link passHref href={`/hotel/${hotel._id}`}>
                    <button style={{cursor: 'pointer'}}>See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem