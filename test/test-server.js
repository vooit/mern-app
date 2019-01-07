let mongoose = require("../node_modules/mongoose");

let User = require('../backend/models/user.server.model');


var chai = require('chai');
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
        server.get('/api')
            .expect("Content-type", "/application/json/")
            .expect(200)
            .end(function (err, res) {
                // console.log(res.body)
                expect(res.status).to.equal(200);
                res.should.be.json;
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
    // it("should add user to ubj", function (done) {
    //     let user = {
    //         firstName: "John",
    //         lastName: "Rambo",
    //         email: "www@wp.pl",
    //         eventDate: "22-12-1982"
    //     };
    //
    //     server.post('/')
    //         .send(user)
    //         .expect("Content-type", /json/)
    //         .expect(200)
    //         .end(function (err, res) {
    //             console.log(err, 'should add user to ubj')
    //             expect(res.status).to.equal(200);
    // res.should.be.a('object');
    // res.should.have.property(Object('success', 'message'));
    // res.error.should.equal(false);

    //             done();
    //         });
    // });
    // describe('/DELETE/:id user', () => {
    //     it('it should DELETE an user', (done) => {
    //         let user = {
    //             firstName: "John",
    //             lastName: "Rambo",
    //             email: "www@wp.pl",
    //             eventDate: "22-12-1982"
    //         }
    //         server.user.save((err, user) => {
    //             chai.request(server)
    //                 .delete('/api/' + user.id)
    //                 .end((err, res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.should.have.property('message').eql('message:' + user.firstName + ' deleted successfully');
    //                     res.body.result.should.have.property('ok').eql(1);
    //                     done();
    //                 });
    //         });
    //     });
    // });
})
