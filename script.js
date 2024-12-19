// Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarAleatorio(){
    let dígitos = '0123456789ABCDEF';
    let colorHex = '#';

    

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += dígitos[indiceAleatorio];
    }

    return colorHex;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarAleatorio();
    // Actualizar el texto.
    color.textContent = colorAleatorio;
    // Actualizar el color de fondo.
    document.body.style.backgroundColor = colorAleatorio;
});