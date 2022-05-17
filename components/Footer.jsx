import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.section}>
            <a href="Countries">Countries</a>
            <a href="Regions">Regions</a>
            <a href="Cities">Cities</a>
            <a href="Districts">Districts</a>
            <a href="Airports">Airports</a>
            <a href="Hotels">Hotels</a>
        </div>
        <div className={styles.section}>
            <a href="Homes">Homes</a>
            <a href="Apartments">Apartments</a>
            <a href="Resorts">Resorts</a>
            <a href="Villas">Villas</a>
            <a href="Hostels">Hostels</a>
            <a href="Guest-houses">Guest houses</a>
        </div>
        <div className={styles.section}>
            <a href="Unique-places-to-stay">Unique places to stay</a>
            <a href="Reviews">Reviews</a>
            <a href="Unpacked">Unpacked</a>
            <a href="Tavel-communities">Tavel communities</a>
            <a href="Seasonal-and-holiday-deals">Seasonal and holiday deals</a>
        </div>
        <div className={styles.section}>
            <a href="Car-rental">Homes</a>
            <a href="Flight-Finder">Flight Finder</a>
            <a href="Restaurant-reservations">Restaurant reservations</a>
            <a href="Travel-Agents">Travel Agents</a>
        </div>
    </div>
  )
}

export default Footer