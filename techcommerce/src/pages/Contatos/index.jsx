import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./contato.module.css";

function Contatos(){
   return(
    <>
    <Header />
    <main className={styles.container}>
     <h1>Entre em Contato</h1>
     <p>Preencha o formulario abaixo e entraremos o mais breve possível.</p>
     <form className={styles.form}>
        <div className={styles.inputGroup}>
            <label htmlFor="none">Nome:</label>
            <input 
            type="text"
            id="none"
            name="nome"
            placeholder="Digite seu nome"
            required
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            />
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                placeholder="Digite sua mensagem"
                required
            />
        </div>

        <button type="submit" className={styles.button}>Enviar</button>
     </form>
    </main>
    <Footer />
    </>
   );
};

export default Contatos;