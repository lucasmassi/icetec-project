import request from 'supertest';
import app from '../src/app';

describe('Developers', () => {
    it('should be returned a error 401', async () => {
        const response = await request(app)
            .get('/developers');

        expect(response.statusCode).toBe(401);
    });
});