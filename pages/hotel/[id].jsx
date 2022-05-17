import Navbar from '../../components/Navbar'
import styles from '../../styles/Hotel.module.css'
import React, { useEffect, useState } from 'react'
import Email from '../../components/Email'
import Footer from '../../components/Footer'
import PlaceIcon from '@mui/icons-material/Place';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import {axiosReq} from '../../util/apiCalls'

const hotel = () => {
  
  const [slideIndex, setSlideIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const [showReservation, setShowReservation] = useState(false)
  const [hotel, setHotel] = useState({})
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  useEffect(() => {
    const getHotel = async () => {
      const id = location.pathname.split('/')[2]
      try {
        const res = await axiosReq.get(`hotel/${id}?id=${id}`)
        setHotel(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getHotel()
  }, [])

      const handleOpen = (i) => {
        setSlideIndex(i);
        setShowSlider(true);
      }
      const handleMove = (dir) => {
        let newIndex;
        if(dir === 'l'){
          newIndex = slideIndex === 0 ? 5 : slideIndex - 1
        } else {
          newIndex = slideIndex === 5 ? 0 : slideIndex + 1
        }
        setSlideIndex(newIndex)
      }

  return (
    <div className={styles.container}>
        <Navbar />
        {showSlider && (
          <div className={styles.slider}>
            <CloseIcon className={styles.close} onClick={() => setShowSlider(false)} />
            <ArrowCircleLeftIcon className={styles.arrow} onClick={() => handleMove('l')} />
            <div className={styles.sliderWrapper}>
              <img src={hotel.images[slideIndex]} alt="" />
            </div>
            <ArrowCircleRightIcon className={styles.arrow} onClick={() => handleMove('l')} />
          </div>
        )}
        <div className={showReservation ? `${styles.wrapper} ${styles.opacity}` : styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.left}>
                    <h1>{hotel.name}</h1>
                    <p className={styles.location}>
                        <PlaceIcon />
                        {hotel.address}
                    </p>
                    <h3 className={styles.distance}>Excellent location - {hotel.distance}m from center</h3>
                    <h3 className={styles.green}>Book a stay over ${hotel.cheapestPrice} at this property and get a free airport taxi</h3>
                </div>
                <button onClick={() => setShowReservation(true)}>Reserve or Book now!</button>
            </div>
            {/*IMAGES*/}
            <div className={styles.imagesContainer}>
                {hotel.images?.length > 1 ? hotel.images.map((photo, i) => (
                <div className={styles.imgWrapper} key={i}>
                    <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    />
                </div>
                ))
                : photos.map((photo, i) => (
                  <div className={styles.imgWrapper} key={i}>
                      <img
                      onClick={() => handleOpen(i)}
                      src={photo.src}
                      alt=""
                      />
                  </div>
                  ))  
              }
            </div>
            <div className={styles.down}>
                <div className={styles.desc}>
                    <h2>{hotel.title}</h2>
                    <p>
                        {hotel.description}
                    </p>
                </div>
                <div className={styles.checkout}>
                    <h4>Perfect for a 9-night stay!</h4>
                    <p>Located in the real hear of Krakow, this property has an excellent location score of 9.8!</p>
                    <span className={styles.price}><b>${hotel.cheapestPrice * 9}</b> (9 nights)</span>
                    <button onClick={() => setShowReservation(true)}>Reserv or Book now!</button>
                </div>
            </div>
        </div>
        {showReservation && (
          <div className={styles.reservationContainer}>
              <div className={styles.reservationWrapper}>
                <span className={styles.select}>
                  Select your room
                </span>
                <div className={styles.roomsContainer}>
                    <div className={styles.room}>
                      <span className={styles.type}>King Room</span>
                      <span className={styles.roomDesc}>King size bed, 1 bathroom, balcony</span>
                      <span className={styles.people}>Max People: <b>2</b></span>
                      <span className={styles.price}>100</span>
                    </div>
                    <div className={styles.room}>
                      <span className={styles.type}>2 Bed Room</span>
                      <span className={styles.roomDesc}>King size bed, 1 bathroom, balcony</span>
                      <span className={styles.people}>Max People: <b>2</b></span>
                      <span className={styles.price}>100</span>
                    </div>
                    <div className={styles.room}>
                      <span className={styles.type}>Another Room</span>
                      <span className={styles.roomDesc}>King size bed, 1 bathroom, balcony</span>
                      <span className={styles.people}>Max People: <b>2</b></span>
                      <span className={styles.price}>100</span>
                    </div>
                </div>
                <span className={styles.close} onClick={() => setShowReservation(false)}>
                    <CloseIcon />
                </span>
                <button className={styles.reservebtn}>
                  Reserve Now!
                </button>
              </div>
          </div>
        )}
        <Email />
        <Footer />
    </div>
  )
}

export default hotel
