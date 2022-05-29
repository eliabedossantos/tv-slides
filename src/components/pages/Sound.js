import styles from './modules/Sound.module.css'

function Sound(){
    return (
        <div>
            <iframe className={styles.contentIframe} width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{auto_play:true,sharing:true}"></iframe>
        </div>
    );
}

export default Sound;