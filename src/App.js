// General
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Banner from "./components/pages/Banner";
import Welcome from "./components/pages/Welcome";
import Video from "./components/pages/Video";
import Sound from "./components/pages/Sound";

//Layout
import ButtonFullScreen from './components/layout/ButtonFullScreen';
  
function App() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  function currentHour() {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentTime = `${currentHour}:${currentMinute.toFixed(0).padStart(2, '0')}`;
    setHours(currentHour)
    setMinutes(currentMinute)
  }
  
  setInterval(() => {
    currentHour();
  }, 1000);

    
  if(hours == 10 && minutes > 0 && minutes <= 20){
    return (
      <>
        <Welcome />
        <ButtonFullScreen />
      </>
    );
  } 
  else if(hours == 10 && minutes > 20 && minutes <= 40){
    return (
      <>
        <Video />
        <ButtonFullScreen />
      </>
    );
  }
  else if(hours == 10 && minutes > 40 && minutes <= 60){
    return (
      <>
        <Banner />
        <ButtonFullScreen />
      </>
    );
  }
  else{
    return (
      <>
        <Sound />
        <ButtonFullScreen />
      </>
    );
  }
  
}




export default App;
