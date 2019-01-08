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

describe('Api test', function () {

    it("request initialized", done => {
        done();
    });


    it('should list ALL blobs on /api GET', function (done) {
        server.get('/api/users')
        // .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err)
                    throw err;
                expect(res.status).to.equal(200);
                // res.should.be.json;
                // res.body.should.not.be.empty;
                expect(res.body.success).to.equal(true);
                expect(res.body.users).to.be.an('array');
                expect(res.body.users[0]).to.be.an('object');
                expect(res.body.users[0]).have.property('firstName');
                expect(res.body.users[0]).have.property('_id');
                res.body.users[0].should.have.property('firstName');
                done();
            });
    });


    // it('should ADD a user on POST', function (done) {
    //     const user = {
    //         user: {
    //             firstName: "sadwssjv",
    //             lastName: "sasdoo",
    //             email: "wpadb@wp.pl",
    //             eventDate: "10-12-1499"
    //         }
    //     }
    //     server.post('/api/users')
    //         .send(user).end(function (err, res) {
    //         console.log(res.body.user)
    //         expect(res.status).to.equal(200);
    //         expect(res.body).be.a('object');
    //         expect(res.body.user).be.a('object');
    //         expect(res.body.success).to.equal(true);
    //         expect(res.body.message).to.equal("User added successfully");
    //         expect(res.body.user).have.property('firstName');
    //         expect(res.body.user).have.property('lastName');
    //         expect(res.body.user).have.property('email');
    //         expect(res.body.user).have.property('eventDate');
    //         done();
    //     });
    // });


    it('it should DELETE a user by _id', (done) => {

        const user = {
            user: {
                firstName: "aaa",
                lastName: "aaa",
                email: "aaa@wp.pl",
                eventDate: "10-12-1299"
            }
        }


        // let user = new User({firstName: "John", lastName: "Doe", email: "wp@wp.pl", eventDate: "10-12-1778"});


        //paste user _id from database
        server.delete('/api/users/' + "5c35229b13a35d17e8eca1f8")
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                console.log('deleted', res)
                expect(res.status).to.equal(200);
                expect(res.body.success).to.equal(true);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql(res.body.user.firstName + ' deleted successfully');
                done();
            });
    });


    it('should return 404', function (done) {
        server.get('/random')
            .expect(404)
            .end(function (err, res) {
                expect(res.body).to.be.an('object');
                expect(res.body).have.property('message');
                expect(res.body.message).equal('404 page');
                expect(res.status).to.equal(404);
                done();
            });
    });

})
