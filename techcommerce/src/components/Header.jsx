import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
<header className="header">
    <div className='header-top'>
    <div className='logo'>
       <Link to={"/"}>
   <img
    src="/imagem4.jpeg" 
   alt="Logo Techcommerce" 
   />
   </Link>
</div>
     <div className='search-bar'>
        <input
        type='text'
        placeholder='Pesquisar produtos'
        />
        <button>Buscar</button>
     </div>
     <div className='user-options'>
       <Link to={"/Usuario"}>Olá, faça seu login</Link>
       <Link to={"/Carrinho"}>Carrinho</Link>
     </div>
    </div>
<nav className='navigation'>
    <ul>
     <li><Link to={"/"}></Link>Home</li>
     <li><Link to={"/Produtos"}>Produtos</Link></li>
     <li><Link to={"/OfertasDoDia"}>OfertasDoDia</Link></li>
     <li><Link to={"/MaisVendidos"}>Mais vendidos</Link></li>
     <li><Link to={"/Contatos"}>Contato</Link></li>
    </ul>

</nav>
</header>
    );
}

export default Header;