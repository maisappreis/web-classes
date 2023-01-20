import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
// import Home from '../components/home/Home'; // o Header não foi importado, pq o Main já está importando ele lá, e ai já cai aqui.
import Routes from './Routes'; // O HOME foi substituido pelo ROUTES.
import Footer from '../components/template/Footer';

const App = props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

export default App;

// onde está <Routes /> era o <Home />
// pq o Home é quem vai dar as rotas, tipo isso.
