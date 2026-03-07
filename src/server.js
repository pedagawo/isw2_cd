// src/server.js
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Página Lab06 activa en el puerto ${PORT}`);
});