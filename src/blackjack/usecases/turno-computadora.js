import { pedirCarta, valorCarta, crearCartaHTML } from './';

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos  puntos mínimos que la PC necesita para ganar.
 * @param {HTMLElement} puntosHTML 'Sección del documento donde se pintan los puntos acumulados del jugador y PC.
 * @param {HTMLElement} divCartasComputadora 'Sección del documento donde se pintan las cartas que son de la PC.
 * @param {Array<String>} deck Arreglo de tipo String que contiene la baraja de donde tomar cartas. 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Se requieren los puntos mínimos');
    if( !puntosHTML ) throw new Error('Elemento del HTML donde se colocab los puntos del jugador y PC es necesario!');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // // Aquí había una sección de codigo que creaba la imagen de una carta. En su lugar queda esta función > crearCartaHTML()

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
