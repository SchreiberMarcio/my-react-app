import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Container principal */
.login-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Seção de informações */
.info-section {
  flex: 1;
  background-color: #007bff;
  color: #fff;
  padding: 40px 20px;
}

.info-section h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.info-section .subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.info-section .description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Seção de login */
.login-section {
  flex: 1;
  padding: 40px 20px;
}

.login-section h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column; /* Coloca as seções uma embaixo da outra */
    width: 90%;
  }

  .info-section {
    padding: 30px 20px;
    text-align: center; /* Centraliza o texto na seção azul */
  }

  .login-section {
    padding: 30px 20px;
  }

  .form-group input {
    font-size: 0.9rem; /* Ajusta o tamanho do texto nos inputs */
  }

  .btn-submit {
    font-size: 0.9rem;
    padding: 10px;
  }
}

/* Para dispositivos pequenos (max-width: 480px) */
@media (max-width: 480px) {
  .info-section {
    padding: 20px;
    font-size: 0.9rem;
  }

  .info-section h1 {
    font-size: 1.5rem; /* Reduz o tamanho do título */
  }

  .info-section .description {
    font-size: 0.8rem;
  }

  .login-section h2 {
    font-size: 1.2rem; /* Reduz o tamanho do subtítulo */
  }

  .form-group label {
    font-size: 0.8rem;
  }

  .form-group input {
    font-size: 0.8rem;
    padding: 8px;
  }

  .btn-submit {
    padding: 8px;
    font-size: 0.8rem;
  }
}

.navbar {
  flex: 1;
  max-width: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
}

.navbar h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.navbar ul li {
  margin: 10px 0;
}

.navbar ul li a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}

.tweet-button {
  background-color: #1da1f2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px 0;
}

/* Conteúdo principal (central) */
.main-content {
  flex: 2;
  padding: 20px;
  overflow-y: auto;
}

/* Barra direita */
.right-sidebar {
  flex: 1;
  max-width: 300px;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: -1px 0 5px rgba(0, 0, 0, 0.1);
}

.right-sidebar h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.right-sidebar ul {
  list-style: none;
  padding: 0;
}

.right-sidebar ul li {
  margin: 10px 0;
}

.right-sidebar a {
  color: #1da1f2;
  text-decoration: none;
  font-size: 0.9rem;
}
`;