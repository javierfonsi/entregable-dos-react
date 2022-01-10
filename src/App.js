import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import './App.css'

function App() {
    const [ weatherData, setWeatherData ] = useState({})
    const { weather } = weatherData
    const [show, setShow] = useState(true) //bandera de control de loading

    //console.log(weatherData)
    
    const success = (position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b6d44373da7ae13d160b09d7ad923662`)
      .then(answer => setWeatherData( answer.data ))
      .catch(err => console.log(err))
    }
    
    useEffect(()=>{ 
      navigator.geolocation.getCurrentPosition(success)
    }, [])

    const temperatura = Math.floor(weatherData?.main?.temp - 273.15)
    const temperaturaFar = (temperatura * 9/5) + 32

    setTimeout(() => {
      setShow(false)
    }, 2500);
  

  return (
    <div className="App">
      <Header/>

      {
        show ? <Loading/> : (
          <WeatherCard 
          name={weatherData?.name}
          country={weatherData?.sys}
          temp={temperatura}
          tempfar={temperaturaFar}
          weather={weather}
          wind={weatherData?.wind?.speed}
          clouds={weatherData?.clouds?.all}
          pressure={weatherData?.main?.pressure}
          />      
        ) 
      }
    </div>
  );
}

export default App;