import React, { useState } from 'react'
import styles from '../styles/TopMain.module.css'
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import {axiosReq} from '../util/apiCalls'
import { useRouter } from 'next/router'

const SearchBar = () => {
    const router = useRouter()
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [destination, setDestination] = useState('')

    const handleOption = (name, operation) => {
       if(operation === 'd' && options[name] === 0){
            return
       }
       setOptions(prev => {
        return {
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
        }
    })
    }

    const handleSubmit = async () => {
        try {
            /*const res = await axiosReq.get('hotels', {
                startDate: format(date[0].startDate, "MM/dd/yyyy"),
                endDate: format(date[0].endDate, "MM/dd/yyyy"),
                options
            })*/
            router.push({
                pathname: '/list',
                query: {
                    startDate: format(date[0].startDate, "MM/dd/yyyy"),
                    endDate: format(date[0].endDate, "MM/dd/yyyy"),
                    destination: destination
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.searchItem}>
            <HotelIcon />
            <input type="text" placeholder='Where are you going' name="destinaton" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <div className={styles.searchItem}>
            <CalendarMonthIcon />
            <span onClick={() => setOpenDate(prev => !prev)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
                <DateRange 
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={styles.date}
                />
            )}
        </div>
        <div className={styles.searchItem}>
            <PersonIcon />
            <span onClick={() => setOpenOptions(prev => !prev)}>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
            <div className={styles.options}>
                <div className={styles.option}>
                    <span>Adult</span>
                    <div className={styles.optionActions}>
                        <button className={styles.counterButton} onClick={() => handleOption("adult", "d")}>-</button>
                        <span className={styles.counters}>{options.adult}</span>
                        <button className={styles.counterButton} onClick={() => handleOption("adult", "i")}>+</button>   
                    </div>   
                </div>
                <div className={styles.option}>
                    <span>Children</span>
                    <div className={styles.optionActions}>
                        <button className={styles.counterButton} onClick={() => handleOption("children", "d")}>-</button>
                        <span className={styles.counters}>{options.children}</span>
                        <button className={styles.counterButton} onClick={() => handleOption("children", "i")}>+</button>   
                    </div>       
                </div>
                <div className={styles.option}>
                    <span>Room</span>
                    <div className={styles.optionActions}>
                        <button className={styles.counterButton} onClick={() => handleOption("room", "d")}>-</button>
                        <span className={styles.counters}>{options.room}</span>
                        <button className={styles.counterButton} onClick={() => handleOption("room", "i")}>+</button>   
                    </div>        
                </div>
            </div> 
            )}  
        </div>
        <div className={styles.searchItem}>
            <button className={styles.searchBtn} onClick={handleSubmit}>Search</button>
        </div>
    </div>
  )
}

export default SearchBar