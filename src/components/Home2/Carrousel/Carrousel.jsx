
import './Carrousel.css'
import '../../../App.css'
import { cities } from '../../../data/cities';
import { hotels } from '../../../data/hotels';
import { Slideshow } from './Slideshow'


function Carrousel() {
  let allPhotos = [];

  function getRandomImage(arr) {
    const length = arr.length;
    const randomIndex = Math.floor(length * Math.random())
    return arr[randomIndex]
  }

  allPhotos = cities.map((city) => city.photo)
  let hotelss = hotels.map((hotels) => hotels.photo)
  let resultadoHotels = getRandomImage(hotelss)
  resultadoHotels.forEach(photo => allPhotos.push(photo))

  return (
    <div className="carrousel">
      <Slideshow
      imgs={[...allPhotos]} 
      />
    </div>
  );
}

export { Carrousel }