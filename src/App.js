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

// Api
// import api from './Api';
  
function App() {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  var welcomeControl = false;

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

  if(welcomeControl === false){
    if(minutes > 0 && minutes <= 25){
      return (
        <>
          <Video />
          <ButtonFullScreen />
        </>
      );
    }
    else if(minutes > 25 && minutes <= 45){
      return (
        <>
          <Banner />
          <ButtonFullScreen />
        </>
      );
    }
    else if(minutes > 45 && minutes <= 59){
      return (
        <>
          <Sound />
          <ButtonFullScreen />
        </>
      );
    }
  }
  else{
    return (
      <>
        <Welcome />
        <ButtonFullScreen />
      </>
    );
  }
  
}




export default App;
