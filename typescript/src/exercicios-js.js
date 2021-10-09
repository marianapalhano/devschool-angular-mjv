"use strict";
exports.__esModule = true;
exports.elevarAoQuadrado = exports.somaNumeros = exports.somentePares = void 0;
/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros
 */
function somentePares(numeros) {
    var pares = numeros.filter(function (n) {
        return n % 2 === 0;
    });
    return pares;
}
exports.somentePares = somentePares;
console.log(somentePares([1, 2, 3, 4]));
/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros
 */
function somaNumeros(numeros) {
    var result = numeros.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    return result;
}
exports.somaNumeros = somaNumeros;
console.log(somaNumeros([2, 4, 6]));
/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros
 */
function elevarAoQuadrado(numeros) {
    var quadrado = numeros.map(function (n) {
        return n * n;
    });
    return quadrado;
}
exports.elevarAoQuadrado = elevarAoQuadrado;
console.log(elevarAoQuadrado([1, 2, 3, 4]));
