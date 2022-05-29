import $ from 'jquery';
import styles from './modules/Banner.module.css'

function Banner(){
    return (
        <div>
            <div className={`d-flex justify-content-center align-items-center slide w-100 ${styles.slideContent}`}>
                <img id="imgBanner" className={`mw-100 w-100 h-100 mh-100`} src="" />
            </div>
            

        </div>
    );
}

function loadBanner(){
    var arrayImages = ['default.png','site-novo-codern.png','campanha-varela.png', 'projeto-semana-industria.png']
    var index = 0, // starting index
    maxImages = arrayImages.length - 1;
    var timer = setInterval(function() {
        var currentImage = arrayImages[index];
        
        index = (index == maxImages) ? 0 : ++index;
        
        
        $('#imgBanner').fadeOut(500, function() {
        
        
        
        document.querySelector('#imgBanner').setAttribute("src", '../../img/'+currentImage);
        
        $('#imgBanner').fadeIn(500);
        });
        }, 7000);//mudança de conteudo
}
loadBanner();



export default Banner;