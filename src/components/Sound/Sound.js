import { SoundFrame, SoundImg } from './Sound.styles';

function Sound(){

    const imgLink = '../../img/default.png';
    const soundLink = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334671843&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true";
    
    return (

        <div>
            <SoundImg src={imgLink} alt="artmax" />

            <SoundFrame  src={soundLink} />            
        </div>
    );
}

export default Sound;