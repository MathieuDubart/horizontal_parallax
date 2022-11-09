let container = document.querySelector('.custom-container');
let layers = document.querySelectorAll('.custom-layer');

container.onscroll = function (){
    let X = container.scrollTop;

    for(let i=1; i<layers.length+1;i++) {
        layers[i-1].style.left=X/(16/i)+'px';
    }
}