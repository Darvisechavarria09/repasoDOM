let boton=document.getElementById('boton');
let boton2=document.getElementById('boton2');
let foto1=document.getElementById('foto1');
let titulo1=document.getElementById('titulo1');
let audio1=document.getElementById('audio1');
let foto2=document.getElementById('foto2');
let titulo2=document.getElementById('titulo2');
let audio2=document.getElementById('audio2');
let foto3=document.getElementById('foto3');
let titulo3=document.getElementById('titulo3');
let audio3=document.getElementById('audio3');

boton.addEventListener('click',perroGuardian);

function perroGuardian(){
    titulo1.textContent="card tittle";
    foto1.src="img/img2.jpg";
    audio1.src="Audio/cancion4.mp3";

    titulo2.textContent="card tittle";
    foto2.src="img/img3.jpg";
    audio2.src="Audio/cancion5.mp3";

    titulo3.textContent="card tittle";
    foto3.src="img/img6.jpg";
    audio3.src="Audio/cancion6.mp3";
}

boton2.addEventListener('click',perroGuardian2);
function perroGuardian2(){
    titulo1.textContent="Fly me To the Moon";
    foto1.src="img/img1.jpg";
    audio1.src="Audio/cancion1.mp3";

    titulo2.textContent="My Way";
    foto2.src="img/img5.jpg";
    audio2.src="Audio/cancion2.mp3";

    titulo3.textContent="That's Life";
    foto3.src="img/img4.png";
    audio3.src="Audio/cancion3.mp3";
}