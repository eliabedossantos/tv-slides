import styles from './modules/Sound.module.css'

function Sound(){
    return (
        <div>
            {/* <iframe className={styles.contentIframe} width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{auto_play:true,sharing:true}"></iframe> */}
            <iframe width="100%" height="300" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334671843&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
            
        </div>
    );
}

export default Sound;