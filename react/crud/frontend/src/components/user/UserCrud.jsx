import React, { Component } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: "user",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

// Aqui o componente precisará ter estado, diferente dos outros que são componentes funcionais.

const baseUrl = "http://localhost:3001/users"; // para conversar com o backend.
const initialState = {
    user: { name: "", email: "" },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState };

    // função que será chamada qnd o componente for ser exibido na tela. Fazer chamada no backend para obter a lista de usuários.
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user }) // função para limpar o formulário após o envio do mesmo.
    }

    save() { // função 'save()' vai servir para incluir um novo usuário, e também para alterar um usuário existente. POST: incluir. PUT: alterar.
        const user = this.state.user; // 
        const method = user.id ? "put" : "post"; // se 'user.id' é TRUE, ou seja, diferente de 0, isso é, se o usuário tem um ID, então faz PUT, se não, faz POST.
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user) // como 'method' é uma string, se chama usando [] e 'axios[method]()' é uma função com parâmetros, que usa 'promise' e por isso o 'then'.
            .then(resp => {
                const list = this.getUpdatedList(resp.data) // 'resp.data' é o usuario que acabou-se de obter do WebService, o JSONServer.
                this.setState({ user: initialState.user, list }) // depois de salvar ou incluir usuario, quero limpar o formulário e atualizar a lista.                
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id); // filter gera uma nova lista, filta usuarios que tem ID diferentes daquele que eu passei como parâmentro, ou seja, uma lista sem ele.
        if(add) list.unshift(user); // Se 'add' é TRUE, eu adiciono esse usuário do parâmentro, na primeira posição da lista. Se FALSE, não adiciono.
        return list
    }
    
    // para atualizar os campos nome e email

    updateField(event) {
        const user = { ...this.state.user }; // clonou o usuário, para não alterar diretamente no state.
        user[event.target.name] = event.target.value;
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name}
                                onChange={e => this.updateField(e)} placeholder="Digite o nome..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" name="email" value={this.state.user.email}
                                onChange={e => this.updateField(e)} placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }    

    // Duas funções, a caneta para carregar o usuário qnd for editar e o lixo para excluir usuário.

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list })
        })
    }

    // Renderizar toda a lista de usuários em uma tabela.

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => { // mapear a lista de usuarios de dentro do estado do objeto para trechos de .jsx
            return (
                <tr key={user.id}> 
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        }) 
    } // sempre que retornar um Array de .jsx tem que usar o atributo 'key'.

    // função 'render()' renderiza todo o Formulário criado em 'renderFrom()'.

    render() {        
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}




