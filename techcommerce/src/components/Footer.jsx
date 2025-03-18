import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 TechComerce. Todos os direitos reservados.</p>
                <div className="footer-nav">
                    <ul>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#privacidade">Política de Privacidade</a></li>
                        <li><a href="#termos">Termos de Uso</a></li>
                        <li><a href="#ajuda">Ajuda</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;