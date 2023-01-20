
// TypeScript é usado junto com o JavaCript, ele ajuda na questão da tipagem, o tipo.
// Pode ver que ali ele diz os tipos de 'nome' e de 'preço'.

export interface Vendavel {
    nome: string
    preco: number
}

export class Carro implements Vendavel {
    nome: string
    preco: number
}
