const request = require('supertest');
const app = require('../app');

describe('server', () => {
  it('responds to root request with 200', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
