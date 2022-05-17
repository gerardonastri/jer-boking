import React from 'react'
import styles from '../styles/MainDestinetions.module.css'

const MainDestinetions = ({data}) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h2>Dublin</h2>
            <h3>123 properties</h3>
        </div>
        <div className={styles.card}>
            <h2>Reno</h2>
            <h3>533 properties</h3>
        </div>
        <div className={styles.card}>
            <h2>Austin</h2>
            <h3>532 properties</h3>
        </div>
    </div>
  )
}

export default MainDestinetions

export async function getServerSideProps(context) {
  const {data} = await axiosReq.get('hotel/countByCity?cities=Dublin,Reno, Austin')
  return {
    props: {data}, // will be passed to the page component as props
  }
}