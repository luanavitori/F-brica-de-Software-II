"use client"; // Adiciona esta linha no início

import React, { useState } from 'react';
import styles from './page.module.css';

function AlterarLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, senha });
  };

  return (
    <div className={styles.container}>
      <h1>ALTERAR LOGIN</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">Email/Número de Celular:</label>
          <input className={styles.input}
            type="text"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="senha">Nova Senha:</label>
          <input className={styles.input}
            type="password"
            id="senha"
            name="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </div>
  );
}

export default AlterarLogin;
