// tests/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Lab06 API', () => {
    test('GET / responde con mensaje de bienvenida', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('API Carnet: 118***3');
    });

    test('GET /health retorna estado ok', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });

    test('Incluye versión del app', async () => {
        const res = await request(app).get('/');
        expect(res.body).toHaveProperty('version');
    })
})