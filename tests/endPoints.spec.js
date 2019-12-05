require('dotenv').config();
const chai = require('chai');
const Joi = require('joi');
const chaiHttp = require('chai-http');
const server = require('../api/server');
const validation = require('../api/validations/addNewVacancyRequestValidation');

const {expect} = chai;
chai.use(chaiHttp);

/*
  * Test the /GET All employees namesroute
  */
 describe('/GET api/employees/', () => {
    it('*it should GET all the employees Names', (done) => {
      chai.request(server)
          .get('/employees')
          .end((err, res) => {
            if (!err) response = res;
            done();
          });
    });
    it('Check Status Code for Get employees names', done => {
        expect(response.status).to.equal(200);
        done();
      });
  
      it('Check Message response for Get employees names', done => {
        expect(response.body.msg).to.equal('Successfully Retrieved All employees Names');
        done();
      });
  
      it('Check Type for data coming form the Get employees names', done => {
        expect(response.body.data).to.be.an('array');
        done();
      });
  
});
