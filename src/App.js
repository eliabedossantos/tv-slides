// General
import React from "react";
import { useControl } from "./Context/ControlContext";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Banner from "./components/Banner/Banner";
import Welcome from "./components/Welcome/Welcome";
import Video from "./components/Video/Video";
import Sound from "./components/Sound/Sound";

// Api
// import api from './Api';
  
function App() {

  const {time, welcomeControl} = useControl();
  
  React.useEffect(()=>{
    console.log(time.minutes);
  })

  if(welcomeControl === false){
    if(time.minutes > 0 && time.minutes <= 25){
      return (
        <>
          <Video />
        </>
      );
    }
    else if(time.minutes > 25 && time.minutes <= 34){
      return (
        <>
          <Banner />
        </>
      );
    }
    else if(time.minutes > 34 && time.minutes <= 59){
      return (
        <>
          <Sound />
        </>
      );
    }
  }
  else{
    return (
      <>
        <Welcome />
      </>
    );
  }
  
}




export default App;
