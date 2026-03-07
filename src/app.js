// src/app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api', (req, res) => {
    res.json({ message: 'MENSAJE INCORRECTO PARA ROMPER TEST', version: '1.0.0'});
});

// EndPoint a verificar por el pipeline post deploy
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString()});
});

module.exports = app;