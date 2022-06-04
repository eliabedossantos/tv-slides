import { createContext, useContext, useState } from "react";
import ButtonFullScreen from '../components/FullScreenButton/ButtonFullScreen';

const ControlContext = createContext();

export const ControlProvider = ({children})=>{
    const [time, setTime] = useState({
        hours: 0, 
        minutes: 0
    });
    const [welcomeControl, setWelcomeControl] = useState(false);

    function currentHour() {
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();

        setTime({
            hours: currentHour,
            minutes: currentMinute
        });
    }
      
    setInterval(() => {
        currentHour();
    }, 1000);

    const value = { 
        time,
        welcomeControl
    };

    return(
        <ControlContext.Provider value={value}>
            <>
                {children}
                <ButtonFullScreen />
            </>
        </ControlContext.Provider>
    )
}

export const useControl = () => useContext(ControlContext)