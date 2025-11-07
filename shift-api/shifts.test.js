const request = require('supertest');
const app = require('./app');

describe('GET /api/v1/shifts', () => {
  it('should return shifts', async () => {
    const response = await request(app).get('/api/v1/shifts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
