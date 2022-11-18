
import './Carrousel.css'
import '../../../App.css'
import { cities } from '../../../data/cities';
import { hotels } from '../../../data/hotels';
import CarouselImgs from './ImagesC'
import { useState, useEffect } from 'react'


export function Carrousel() {
  let [n, setN] = useState(0)
  let [id, setId] = useState(0)
  useEffect(
    () => {
      let idInterval = setInterval(
        () => {
          next()
        }
        , 5000
      )
      setId(idInterval)
      return clearInterval(id)

    }, [n])


  let arrCitys = [];
  let arrHotels = [];
  arrCitys = cities.map(e => e.photo)
  arrHotels = hotels.map(e => e.photo[0])

  let next = () => {
    if (n < arrCitys.length - 1) {
      setN(n + 1)
    }
    else {
      setN(0)
    }
    clearInterval(id)
  }

  let back = () => {
    if (n > 0) {
      setN(n - 1)
    }
    else {
      setN(arrCitys.length - 1)
    }
    clearInterval(id)
  }

  return (
    <>
      <div className='contenedor-carousel'>
        <div className='contenedor-imgs'>
          <div className='btns-carousel'>
            <button onClick={back} className='btn-carrousel'>👈</button>
          </div>
          <CarouselImgs image={arrCitys[n]} />
          <CarouselImgs image={arrCitys[n + 1]} />
          <div className='btns-carousel'>
            <button onClick={next} className='btn-carrousel'>👉</button>
          </div>
        </div>
        <div className='contenedor-imgs'>
          <CarouselImgs image={arrHotels[n]} />
          <CarouselImgs image={arrHotels[n + 1]} />
        </div>
      </div>
    </>
  )
}