import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {

// como nosso 'cliente' é uma classe, e por padrão, ela não será convertida automaticamente para um JSON,
// por isso tenho que converter para um objeto. De classe para objeto.

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        }, // pegando lá do firebase.
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) { // se o cliente já tiver um id, então ele vai alterar.
            await this.colecao().doc(cliente.id).set(cliente);
            return cliente
        } else { // senão, vai adicionar.
            const docRef = await this.colecao().add(cliente);
            const doc = await docRef.get();
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get();
        return query.docs.map(doc => doc.data()) ?? [] // vai mapear todos os documentos para me dar os cliente, caso não obtenha nada, retorna array vazio.
    }

    private colecao() {
        return firebase.firestore().collection("clientes").withConverter(this.#conversor)
    }

}