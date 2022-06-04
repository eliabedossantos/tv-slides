import $ from 'jquery';
import {ContainerBox, ContainerImg} from '../../Styles/global.styles';

function Banner(){
    return (
        <ContainerBox className="slide">
            <ContainerImg id='imgBanner' src=""/>
        </ContainerBox>
    );
}

function loadBanner(){
    var arrayImages = ['default.png','site-novo-codern.png','campanha-varela.png', 'projeto-semana-industria.png']
    var index = 0, // starting index
    maxImages = arrayImages.length - 1;
    var timer = setInterval(function() {
        var currentImage = arrayImages[index];
        
        index = (index === maxImages) ? 0 : ++index;
        
        
        $('#imgBanner').fadeOut(500, function() {
        
        
        
        document.querySelector('#imgBanner').setAttribute("src", '../../img/'+currentImage);
        
        $('#imgBanner').fadeIn(500);
        });
        }, 7000);//mudança de conteudo
}

loadBanner();



export default Banner;