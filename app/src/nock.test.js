import nock from 'nock';

nock('http://localhost:3001/api')
    .get('/users')
    .reply(200, {users: []});