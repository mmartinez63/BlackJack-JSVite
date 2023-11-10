/**
 * 
 * @param {Array<String>} carta Especifica el nombre de un naipe.
 * @returns {HTMLImageElement} Crea una Imagen en el navegador.
 */

export const crearCartaHTML = ( carta ) => {

    if(!carta)throw new Error('Debe especificarse un nombre de carta!');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};