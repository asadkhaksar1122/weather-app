import "./App.css";
import "@fontsource/roboto/500.css";
import Form from "./form";
import { useEffect, useState } from "react";
import Card from "./card";
function converttime(time) {
  let sunriseDate = new Date(time * 1000);
  let hours = sunriseDate.getHours();
  let minutes = sunriseDate.getMinutes();
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let formattedSunriseTime = `${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${meridiem}`;
  return formattedSunriseTime;
}
function App() {
  let [city, setcity] = useState("");
  let [result, setresult] = useState(null);
  let [validcity, setvalidcity] = useState(true);
   useEffect(() => {
     if (!city) {
       const timeout = setTimeout(() => {
         setcity(true);
       }, 5000);

       return () => clearTimeout(timeout);
     }
   }, [city]);
  function handlechange(e) {
    setcity(e.target.value);
  }
  let getweather = async (city) => {
    let api = import.meta.env.VITE_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${api}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };
  let searchcity = async (e) => {
    try {
         e.preventDefault();
         let data = await getweather(city);
         console.log(data);
         let previewresult = {
           weather:
             Number.parseInt(Math.floor(data.main.temp)) > 30
               ? "Hot"
               : Number.parseInt(Math.floor(data.main.temp)) < 30 &&
                 Number.parseInt(Math.floor(data.main.temp)) > 15
               ? "Cool"
               : "Extremly Cool",
           imageurl:
             Number.parseInt(Math.floor(data.main.temp)) > 30
               ? "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               : Number.parseInt(Math.floor(data.main.temp)) < 30 &&
                 Number.parseInt(Math.floor(data.main.temp)) > 15
               ? "https://images.unsplash.com/photo-1712325910182-fb465c784fe6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               : "https://plus.unsplash.com/premium_photo-1706625699202-b559d88f579f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           name: data.name,
           temp: data.main.temp,
           feel_like: data.main.feels_like,
           temp_max: data.main.temp_max,
           temp_min: data.main.temp_min,
           humidity: data.main.humidity,
           pressure: data.main.pressure,
           sea_level: data.main.sea_level,
           sunrise: converttime(data.sys.sunrise),
           sunset: converttime(data.sys.sunset),
           country: data.sys.country,
           windspeed: data.wind.speed,
           winddirection: data.wind.deg,
         };
         setresult(previewresult);
      console.log(previewresult);
      setvalidcity(true)
         setcity("");
    } catch (error) {
      setvalidcity(false);
      setresult({});
    }
 
  };
  return (
    <>
      <Form city={city} handlechange={handlechange} searchcity={searchcity} />
     
      <Card result={result} validcity={validcity} />
    </>
  );
}

export default App;
