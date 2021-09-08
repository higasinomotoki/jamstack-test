import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from './components/Results';
import { useState } from "react";
import { Console } from 'console';
function App() {
  const [city, setCity] = useState("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=e3ad290094b8448d99635849210408&q=London&aqi=no")
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div className="test">
      <Title/>
      <Form setCity={setCity} getWeather={getWeather} />
      <Results/>
    </div>
  );
}

export default App;
