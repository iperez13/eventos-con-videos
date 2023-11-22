let video = document.querySelector('.botonvideo');

video.addEventListener('play', function (){
    console.log('Di play en el video');
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
})

video.addEventListener('seeking', function (){
    console.log('se esta viendo una parte del video', this.currentTime);
})

video.addEventListener('ended', function (){
    console.log('terminó el video');
    let decision = confirm('¿deseas ver el video de nuevo?');
    console.log(decision);
    if (decision== true) {
        video.play();
    }else{
        window.location = "https://google.com/"
    }
})

// video.addEventListener('pause', function (){
//     console.log('el video se pauso');
// })

// temporizadores o timer 

// setInterval
// setTimeout

let temporizador = setInterval(function(){
    ponercolorbody();
}, 2000);

// let timer = setTimeout(function(){
//     ponercolorbody();
// }, 3000)

function ponercolorbody() {
    let pantalla = document.body;
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? "green" : "blue";
}

// Arreglogs, vectores, Arrays

let array = ['uno', 'dos','tres'];

let array2 = ['cuatro','cinco','seis']

array2[1];

let multidimensional = [array, array2];

multidimensional[0][1] = 'dos';




