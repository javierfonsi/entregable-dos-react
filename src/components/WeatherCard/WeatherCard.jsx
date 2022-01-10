import React, { useState } from 'react'
import "./WeatherCard.css"

export const WeatherCard = ({ name, country, temp, weather, wind, clouds, pressure, tempfar }) => {
    const [ isTrue, setIsTrue ] = useState(true)

    return (
        <div className='cardInfo'>
            <h2>Location: {name} {country?.country}</h2>
            {
                weather?.map(picture=>
                    <img src={`https://openweathermap.org/img/wn/${picture.icon}@2x.png`} alt="" key={picture.id}/>
                )
            }

            {
                isTrue ? <h4>{`Temperature: ${temp}°C`}</h4> : <h4>{`Temperature: ${tempfar}°F`}</h4>
            }
            <button onClick={()=> setIsTrue(!isTrue)}>{isTrue ? "Change to fahrenheit" : "Change to celcius"}</button>
            
            {
                weather?.map(info =>
                   <h4 key={info.id}>{info.description}</h4> 
                )
            }

            <h4>{`Wind speed: ${wind}`}</h4>
            <h4>{`Clouds: ${clouds}%`}</h4>
            <h4>{`Pressure: ${pressure} mb`}</h4>
            
        </div>
    )
}