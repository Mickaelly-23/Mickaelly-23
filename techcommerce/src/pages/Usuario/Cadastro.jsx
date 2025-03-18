import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./cadastro.module.css";

function Cadastro() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        cep: "",
        endereco: "",
        cidade: "",
        estado: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const buscarCep = async () => {
        if (formData.cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${formData.cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setFormData({
                        ...formData,
                        endereco: data.logradouro,
                        cidade: data.localidade,
                        estado: data.uf
                    });
                } else {
                    alert("CEP não encontrado");
                }
            } catch (error) {
                alert("Erro ao buscar o CEP");
            }
        }
    };

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Crie sua Conta</h1>
                <p>Preencha os campos abaixo para se cadastrar.</p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="nome">Nome:</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            placeholder="Digite seu nome" 
                            value={formData.nome} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">E-mail:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Digite seu e-mail" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="senha">Senha:</label>
                        <input 
                            type="password" 
                            id="senha" 
                            name="senha" 
                            placeholder="Crie uma senha" 
                            value={formData.senha} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="cep">CEP:</label>
                        <input 
                            type="text" 
                            id="cep" 
                            name="cep" 
                            placeholder="Digite seu CEP" 
                            value={formData.cep} 
                            onChange={handleChange} 
                            onBlur={buscarCep} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="endereco">Endereço:</label>
                        <input 
                            type="text" 
                            id="endereco" 
                            name="endereco" 
                            placeholder="Seu endereço" 
                            value={formData.endereco} 
                            readOnly 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="cidade">Cidade:</label>
                        <input 
                            type="text" 
                            id="cidade" 
                            name="cidade" 
                            placeholder="Sua cidade" 
                            value={formData.cidade} 
                            readOnly 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="estado">Estado:</label>
                        <input 
                            type="text" 
                            id="estado" 
                            name="estado" 
                            placeholder="Seu estado" 
                            value={formData.estado} 
                            readOnly 
                        />
                    </div>
                    <button type="submit" className={styles.button}>Cadastrar</button>
                    <p className={styles.toggleText}>
                        Já tem uma conta? <Link to="/usuario">Faça login</Link>
                    </p>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default Cadastro;
