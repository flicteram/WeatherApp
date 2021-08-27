import React, {useState, useEffect, createContext} from 'react'
const Context = createContext();

function ContextProvider(props){
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState([])

    function handleChange(e){
        setQuery(e.target.value)
    }
  
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
      
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=56411f6296174712af881712212508&q=${latitude},${longitude}&days=3&aqi=no&alerts=no`)
      .then(response=>response.json())
      .then(data=>setWeather(
  
        <div className='weatherContainer'>
  
        <div className='currentWeatherInfo'>
        <p>{data.location.name}, {data.location.country} </p>
        <img src={data.current.condition.icon} alt={data.current.condition.text}/>
        <p>{data.current.condition.text}, {data.current.temp_c}°C</p>
        </div>
  
        <div className='nextWetherContainer'>
        {data.forecast.forecastday.map((item,index)=>(
        <div className="nextWeather" key={index}>
        <img src={item.day.condition.icon} alt={item.day.condition.text}/>
        <p className="itemDateNext">{item.date}</p>  
        <p className="itemInfoC">M: {Math.round(item.day.maxtemp_c)}°C</p>
        <p className="itemInfoC">L: {Math.round(item.day.mintemp_c)}°C</p>
        </div>
        ))}
        </div>
        </div>
      ))
    })},[]) 
  
    function handleSubmit(e){
      e.preventDefault();
      if(query!==""){
      fetch((`http://api.weatherapi.com/v1/forecast.json?key=56411f6296174712af881712212508&q=${query}&days=3&aqi=no&alerts=no`))
      .then(response=>response.json())
      .then(data=>setWeather(
        <div className='weatherContainer'>
  
        <div className='currentWeatherInfo'>
        <p>{data.location.name}, {data.location.country} </p>
        <img src={data.current.condition.icon} alt={data.current.condition.text}/>
        <p>{data.current.condition.text}, {data.current.temp_c}°C</p>
        </div>
  
        <div className='nextWetherContainer'>
        {data.forecast.forecastday.map((item,index)=>(
        <div className="nextWeather" key={index}>
        <img src={item.day.condition.icon} alt={item.day.condition.text}/>
        <p className="itemDateNext">{item.date}</p>  
        <p className="itemInfoC">M: {Math.round(item.day.maxtemp_c)}°C</p>
        <p className="itemInfoC">L: {Math.round(item.day.mintemp_c)}°C</p>
        </div>
        ))}
        </div>
        </div>))
        }
    }
  
    return(
        <Context.Provider value={{query, weather, handleChange, handleSubmit}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}