var chai = require('chai');
var chaiHttp = require('chai-http');
var supertest = require("supertest");
var should = chai.should();
var url = 'http://localhost:3001';
var server = supertest.agent(url);
chai.use(chaiHttp);


describe('Blobs', function () {
    it('should list ALL blobs on /api GET');
    it('should list a SINGLE blob on /api/ id GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /api/ id PUT');
    it('should delete a SINGLE blob on /api/ id DELETE');

    it("request initialized", done => {
        server.should.be.ok;
        done();
    });
    it('should list ALL blobs on /api GET', function (done) {
        server.get('/api')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.error.should.equal(false);
            });
        done();
    })
    it("should add two number",function(done){

        //calling ADD api
        server
            .post('/api/')
            .send({firstName: "vooit", lastName:"pac", email:"www@wp.pl", eventDate:"22-12-1982"})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                res.body.error.should.equal(false);
            });
        done();
    });
})


