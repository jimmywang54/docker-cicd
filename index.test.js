
const index = require('./index');
const supertest = require('supertest')

test('HelloWorld', () => {
    supertest(index).get('/').then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(expect.any(Object))
        expect(res.body).toEqual(expect.objectContaining({
            result: expect.any(String)
        }))
        expect(res.body.result).toBe('Hello World!!');
        done();
    });
})