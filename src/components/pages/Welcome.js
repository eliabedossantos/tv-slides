import styles from './modules/Welcome.module.css'


function Welcome() {
    return(
        <div>
            <div className={`d-flex justify-content-center align-items-center w-100 ${styles.welcomeContent}`}>
                <img id="imgWelcome" className={`mw-100 w-100 h-100 mh-100`} src="../../img/bemvindos-nobrefalcao.png" />
            </div>
        </div>
    );
}

export default Welcome;