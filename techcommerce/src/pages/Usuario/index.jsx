import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./usuario.module.css"


function Usuario(){
    return(
       <>
       <Header />
       <main className={styles.container}>
        <h1> Faça o seu login!</h1>
        <p>Digite seu e-mail e senha para acessar sua conta</p>
        <form className={styles.form}>
            <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail:</label>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="senha">senha:</label>
                <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                required
                />
            </div>
            <button type="submit" className={styles.button}>Entrar</button>
            <p className={styles.toggleText}>
                Não tem conta? <Link to="/cadastro">cadastre-se</Link>
            </p>
        </form>
       </main>
       <Footer />
       </>
    );
 };
 
 export default Usuario;