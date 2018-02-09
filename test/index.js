const request = require('supertest');

request((req, res) => {
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World.');
})
    .get('/')
    .expect(200)
    .end((err, res) => {
        if(err) {
            throw err;
        }
    });