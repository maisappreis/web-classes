import './Header.css';
import React from 'react';

const Header = props => 
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>


export default Header;

// fa fa > são as fontes do Font Awesome, a qual tem vários ícones dispiníveis.
// fa fa-${props.icon} >> vai virar >> fa fa-home
// ${props.icon} > home
// {props.title} > Início
// o restantes das className são estilos do Bootstrap.