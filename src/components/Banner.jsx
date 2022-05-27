import { useEffect, useState } from 'react';
import { Actions } from './Actions';
import { setItemToLocalStorage, getItemToLocalStorage } from '../lib/helpers';

import bemVindosCocoecia from '../img/bemvindos-cocoecia.png';
import bemVindosNobrefalcao from '../img/bemvindos-nobrefalcao.png';
import bemVindosTeste from '../img/bemvindos-teste.png';
import bemVindos from '../img/bemvindos.png';
import campanhaVarela from '../img/campanha-varela.png';
import defaultImage from '../img/default-image.png';
import projetoSemanaIndustria from '../img/projeto-semana-industria.png';
import siteNovoCodern from '../img/site-novo-codern.png';

const images = [
  bemVindosCocoecia,
  bemVindosNobrefalcao,
  bemVindosTeste,
  bemVindos,
  campanhaVarela,
  defaultImage,
  projetoSemanaIndustria,
  siteNovoCodern,
];

export function Banner(){
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [settings, setSettings] = useState(getItemToLocalStorage('settings') || {
    timer: 1000,
    backgroundColor: "#000000",
    random: false,
    play: true,
    counter: 0,
    imageBehavior: "cover"
  });

  useEffect(() => {
    let interval; 
    if(settings.play) interval = setInterval(() => {
      if((settings.counter >= (images.length - 1)) && !settings.random){ 
        setSettings({...settings, counter: 0});
      }else if(settings.random){
        setSettings({...settings, counter: Math.floor(Math.random() * images.length)});
      }else{
        setSettings({...settings, counter: settings.counter + 1});
      }
    }, settings.timer);

    return () => clearInterval(interval);
  }, [currentImage, settings]);

  useEffect(() => {
    setCurrentImage(images[settings.counter]);
    setItemToLocalStorage('settings', settings);
  }, [settings]);

  return (
    <>
      <Actions settings={settings} setSettings={setSettings} lengthImages={images.length -1 }/>
      <main className='banner-container' style={{backgroundColor: settings.backgroundColor}}>
        <img src={currentImage} alt="" className='banner-image' style={{objectFit: settings.imageBehavior}}/>
      </main>
    </>
  );
}
  
export default Banner;