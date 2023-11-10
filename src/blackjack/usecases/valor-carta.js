/**
 * 
 * @param {Array<String>} carta --> Arreglo que contiene el nombre de la carta. Ejem: H7 
 * @returns { Number } --> A number
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
