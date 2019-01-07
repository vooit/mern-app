let mongoose = require("../node_modules/mongoose");

let User = require('../backend/models/user.server.model');


var chai = require('chai');
chai.config.includeStack = true;
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var supertest = require("supertest");
// var should = chai.should();
var should = require('should');
var url = 'http://localhost:3001';
var server = supertest.agent(url);
chai.use(chaiHttp);
// var server = require('../backend/app');

describe('Api test', function () {

    it("request initialized", done => {
        server.should.be.ok;
        done();
    });


    it('should list ALL blobs on /api GET', function (done) {
        server.get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err)
                    throw err;
                console.log(res.body)
                expect(res.status).to.equal(200);
                res.should.be.json;
                res.body.should.not.be.empty;
                expect(res.body.success).to.equal(true);
                expect(res.body.users).to.be.an('array');
                expect(res.body.users[0]).to.be.an('object');
                expect(res.body.users[0]).have.property('firstName');
                expect(res.body.users[0]).have.property('_id');
                res.body.users[0].should.have.property('firstName');
                // expect(res.body.users[0]).should.have.property('firstName');
                done();
            });
    });
    // it('should add a SINGLE blob on /blobs POST', function (done) {
    //     this.timeout(300);
    //     server.post('/api/users')
    //         .send(user = {
    //                 "firstName": "Jaaohn",
    //                 "lastName": "Raaambo",
    //                 "email": "wwwaa@wp.pl",
    //                 "eventDate": "22-12-1982"
    //             }
    //         ).end(function (err, res) {
    //         expect(res.status).to.equal(200);
    //         // expect(res.body.success).to.equal(false);
    //         // console.log(res.body)
    //         expect(res.body).be.a('object');
    //         done();
    //     });
    // });

    it('should delete a task', function (done) {
        server.get('/random')
            .expect(404)
            .end(function (err, res) {
                console.log(res.body.status)
                expect(res.body).to.be.an('object');
                expect(res.body).have.property('message');
                expect(res.body.message).equal('404 page');
                expect(res.status).to.equal(404);
                done();
            });
    });

})
