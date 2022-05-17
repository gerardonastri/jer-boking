import React from 'react'
import styles from '../styles/Navbar.module.css'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Link from 'next/link'

import { AuthContext } from "../context/authContext/AuthContext";
import { useContext, useEffect, useState } from "react";

const Navbar = () => {
    const { user } = useContext(AuthContext);

  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
           <Link passHref href="/">
            <h2 style={{cursor: 'pointer'}}>jerbooking</h2>
           </Link>
            {user === null ? (
                <div className={styles.topBarActions}>
                    <Link passHref href={'/register'}>
                        <button>Register</button>
                    </Link>
                    <Link passHref href={'/register'}>
                        <button>Login</button>
                    </Link>
                </div>
            ) : (
                <></>
            )}
        </div>
        <div className={styles.downBar}>
            <div className={styles.categories}>
                <span className={styles.category}>
                    <HotelIcon />
                    <span>Stays</span>
                </span>
                <span className={styles.category}>
                    <FlightIcon />
                    <span>Flights</span>
                </span>
                <span className={styles.category}>
                    <DirectionsCarIcon />
                    <span>Car rentals</span>
                </span>
                <span className={styles.category}>
                    <HotelIcon />
                    <span>Attractions</span>
                </span>
                <span className={styles.category}>
                    <LocalTaxiIcon />
                    <span>Airport taxis</span>
                </span>
            </div>
            <h1>A lifetime of discounts? It's genius</h1>
            <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
           {user === null ? (
               <button>Sign in / Register</button>
           ): (
               <></>
           )}
        </div>
    </div>
  )
}

export default Navbar
