const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Configuração do servidor Express
const app = express();
const port = 3000;

// Middleware para permitir requisições de diferentes origens
app.use(cors());
app.use(express.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost', // ou o host do seu banco de dados
  user: 'root', // seu usuário MySQL
  password: '', // sua senha MySQL
  database: 'odontolife', // o nome do seu banco de dados
});

// Verifique se a conexão com o banco foi bem-sucedida
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Endpoint de cadastro
app.post('/cad', (req, res) => {
  const { name, username, age, cpf, birthDate, password } = req.body;

  if (!name || !username || !age || !cpf || !birthDate || !password) {
    return res.status(400).json({ success: false, message: 'Por favor, preencha todos os campos.' });
  }

  // Criação da consulta SQL para inserir o usuário no banco de dados
  const query = `INSERT INTO users (name, username, age, cpf, birthDate, password) VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [name, username, age, cpf, birthDate, password], (err, result) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      return res.status(500).json({ success: false, message: 'Erro no cadastro.' });
    }

    // Retorna sucesso após inserção
    res.status(201).json({ success: true, message: 'Cadastro realizado com sucesso.' });
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
