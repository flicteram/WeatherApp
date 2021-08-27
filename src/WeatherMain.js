import React, {useContext} from 'react'
import {Context} from './Context'

function WeatherMain(){
    const {query, handleChange, handleSubmit, weather} = useContext(Context)

    return(
        <div className='container'>
        <form onSubmit={handleSubmit}>
            <input value={query}
            type="text" 
            placeholder="e.g. London"
            onChange={handleChange}
            />
            <button>Search</button>
        </form>
            {weather}
        </div>
    )

}

export default WeatherMain