/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */
 export function somentePares(numeros: number[]): number[] {
    const pares = numeros.filter(n => {
        return n%2 === 0; 
    })
    return pares;
}

console.log(somentePares([1, 2, 3, 4]));

/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
 */
export function somaNumeros(numeros: number[]): number {
    const result = numeros.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return result;
}

console.log(somaNumeros([2, 4, 6]));

/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
 */
export function elevarAoQuadrado(numeros: number[]): number[] {
    const quadrado = numeros.map(n => {
        return n*n;
    });
    return quadrado;
}

console.log(elevarAoQuadrado([1, 2, 3, 4]));