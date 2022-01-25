const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {

    let imgAddress = 'images/pic' + i + '.jpg'
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgAddress);
    thumbBar.appendChild(newImage);

    newImage.onclick = function(){
        displayedImage.setAttribute('src', imgAddress)
    }


}




    btn.onclick = function(){
        if (btn.getAttribute('class') === 'dark') { //leio o atributo .class de btn
            btn.textContent = 'Lighten'
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
            btn.setAttribute('class', 'light') //escrevo light no atributo .class de btn
        } else /*if (btn.getAttribute('class') === 'light')*/ {
            btn.textContent = 'Darken'
            overlay.style.backgroundColor = 'rgba(0,0,0,0)'
            btn.setAttribute('class', 'dark')
        } 
    }


