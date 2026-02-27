import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [ weatherInfo, setWeatherInfo] =useState({
        city: "WonderLand",
        feelsLike: 26.75,
        humidity: 13,
        temp: 28.17,
        tempMax: 28.17,
        tempMin: 28.17,
        weather: "clear sky"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center "}}>
            <h2>Weather app by Anshul</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}