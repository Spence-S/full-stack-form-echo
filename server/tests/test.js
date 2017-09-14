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

  it('responds to root request with 200', done => {
    request(app)
      .post('/api')
      .send({
        firstName: 'test name',
        lastName: 'test name',
        address: 'test address',
        company: 'test company'
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.contentType).toBe('Application/JSON');
        expect(response.firstName).toBe('test name');
        expect(response.lastName).toBe('test name');
        expect(response.address).toBe('test address');
        expect(response.compnay).toBe('test company');
        done();
      });
  });
});
