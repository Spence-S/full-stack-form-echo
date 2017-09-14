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

  it('POST to /api responds with json', done => {
    request(app)
      .post('/api')
      .set('Content-Type', 'application/json')
      .send({
        firstName: 'test name',
        lastName: 'test name',
        address: 'test address',
        company: 'test company'
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.firstName).toBe('test name');
        expect(response.body.lastName).toBe('test name');
        expect(response.body.address).toBe('test address');
        expect(response.body.company).toBe('test company');
        expect(response.body._id).toBeDefined();
        expect(response.body._id).toBeTruthy();
        done();
      });
  });
});
