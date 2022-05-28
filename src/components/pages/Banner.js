import $ from 'jquery';
function Banner(){
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center slide w-100">
                <img className="mw-100 w-100 h-100 mh-100" src="" />
            </div>
            
            <button id="btnFullscreen" className="btn-fullscreen" type="submit">tela cheia</button>

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
        
        
        $('.slide img').fadeOut(500, function() {
        
        
        
        $('.slide img').attr("src", '../../../public/img/'+currentImage);
        
        $('.slide img').fadeIn(500);
        });
        }, 7000);//mudança de conteudo
}
loadBanner();



export default Banner;