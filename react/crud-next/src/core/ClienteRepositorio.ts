
// Dentro do Core não precisa trabalhar como o Firebase, pode simplesmente criar um interface para usa-la, que salvará lá no Firebase.

import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]> // retorna um array[] de clientes.
}