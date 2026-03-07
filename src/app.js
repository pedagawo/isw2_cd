// src/app.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API Lab No.06 Activa, Carné: 12***21', version: '1.0.0'});
});

// EndPoint a verificar por el pipeline post deploy
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString()});
});

module.exports = app;