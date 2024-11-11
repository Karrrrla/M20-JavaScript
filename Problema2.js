//Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maivalor e o índice do menor valor.

function maiorNum(array) {
    if (array.length === 0)
    {
        return null
    }
    return Math.max(...array)
}

const listaNum = [1, 0, 9, 2, 3, 8, 4, 7, 6, 5]
console.log(maiorNum(listaNum))