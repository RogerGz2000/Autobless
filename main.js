let slider = document.querySelector(".contenedorslide");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 7000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .9s"
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        },1500)
    }

}

$(document).ready(main);
var contador2 = 1;


function main () {
    $('.menu_bar').click(function(){
        if (contador2 == 1){
            $('nav').animate({
                left: '0'
            });
            contador2 = 0
        }   else {
            contador2 = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
}