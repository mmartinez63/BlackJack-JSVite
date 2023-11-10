import _ from 'underscore';


/**
 * gatito Esta función crea un nuevo deck 
 * @param {array<String>} tiposDeCarta ejem, ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejem, ['A','J','Q','K']
  * @returns  {array <String>} retorna nueva baraja.
 */



export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.lenght ===0 ) throw new Error('El argumento tiposDeCarta es obligatorio y va como arreglo string');
    if( !tiposEspeciales || tiposEspeciales.lenght ===0 ) throw new Error('El argumento tiposEspeciales es obligatorio y va como arreglo string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// ****** EXPORTACIONES POR DEFAULT *********
//export default crearDeck;

