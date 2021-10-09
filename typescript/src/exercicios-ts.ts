// Complete as funções com os tipos apropriados

function soma(a: number, b: number) {
    return a + b;
}

function concatenaPalavras(palavra1: string, palavra2: string) {
    return palavra1.concat(palavra2);
}

function tamanhoDoVetor(vetor:any[]) {
    return vetor.length;
}

// Crie uma interface para representar cada um dos objetos abaixo e coloque o tipo apropriado para cada uma das constantes.
interface Language {
    nome: string,
    tipada: boolean
}
const linguagem: Language = {
    nome: 'Typescript',
    tipada: true,
}

interface Person {
    nome: string,
    sobrenome: string,
    idade: number,
    amigos: Person[]
}

const pessoa: Person = {
    nome: 'Alan',
    sobrenome: 'Jhonnes',
    idade: 31,
    amigos: [
        {
            nome: 'Nathan',
            sobrenome: 'Lima',
            idade: 22,
            amigos: [],
        }
    ]
}

// Crie um novo tipo "StringOuNumero" utilizando união de tipo

export type StringOuNumero = string | number;