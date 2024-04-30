import React, { MouseEventHandler, useEffect, useState } from 'react'
import './Watch.css'

interface WatchType {
  name: string,
  timeZone: string,
  removeWatch: MouseEventHandler,
  id?:  string
}

export const Watch: React.FC<WatchType> = ({ name, timeZone, removeWatch, id}) => {
  let start = new Date();
  let secTimer;
  let [secArrow, setSecArrowDeg] = useState(start.getSeconds() * 6);
  let [minArrow, setMinArrowDeg] = useState(start.getMinutes() * 6);
  let [hourArrow, setHourArrowDeg] = useState((start.getHours() + Number(timeZone)) * 30);

  useEffect(() => {
    secTimer = setTimeout(() => {
        setSecArrowDeg( (prevArrow) => prevArrow + 6 );
        if (secArrow >= 360) {
            setMinArrowDeg(minArrow + 6);
            setSecArrowDeg(6);
        }
        if (minArrow >= 360) {
            setHourArrowDeg(hourArrow + 30)
            setMinArrowDeg(0);
            setSecArrowDeg(6);
        }
    }, 1000);
}, [secArrow])

let styles = {
  secArrow: {
      width: '1px',
      height: '100px',
      backgroundColor: "blue",
      position: 'absolute',
      left: '50%',
      transform: `rotate(${secArrow.toString()}deg)`,
      transformOrigin: 'left bottom',
  },
  minArrow: {
      width: '1px',
      height: '100px',
      backgroundColor: "black",
      position: 'absolute',
      left: '50%',
      transform: `rotate(${minArrow.toString()}deg)`,
      transformOrigin: 'left bottom',
  },

  hourArrow: {
      width: '2px',
      height: '100px',
      backgroundColor: "red",
      position: 'absolute',
      left: '50%',
      transform: `rotate(${hourArrow.toString()}deg)`,
      transformOrigin: 'left bottom',
  }
};


  return (
    <>
      <section className='watch-wrapper'>
          <p>{name}</p>
          <div className='watch'>
              <button  className='remove-button' onClick={removeWatch} id={id}>x</button>
              <div className='sec-arrow' style={styles.secArrow}></div>
              <div className='min-arrow' style={styles.minArrow}></div>
              <div className='hour-arrow' style={styles.hourArrow}></div>
          </div>
      </section>
    </>
  )
}
