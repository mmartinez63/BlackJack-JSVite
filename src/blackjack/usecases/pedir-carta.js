
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck --> Stock de cartas
 * @returns { String } Retorna un valor string con el nombre de la carta.
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
