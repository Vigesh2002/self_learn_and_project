import React from 'react'

const Weather = () => {

    let temp = 10;

    if(temp < 15){
        return <p>It's cold outside!</p>
    } else if(temp >= 15 && temp <= 25){
        return <p>It's a nice day outside.</p>
    } else if(temp > 25){
        return <p>It's hot outside.</p>
    }
}

export default Weather
