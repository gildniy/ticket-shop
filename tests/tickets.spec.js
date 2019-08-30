const Server = require('../index');
const request = require('supertest');
const chai = require('chai');
const {expect} = chai;

describe('Tickets', () => {
    it('should get all tickets', () =>
        request(Server)
            .get('/api/v1/tickets')
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an.an('array')
                    .of.length(2);
            }));

    it('should add a new ticket', () =>
        request(Server)
            .post('/api/v1/tickets')
            .send({name: 'ticket_no_3'})
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an('object')
                    .that.has.property('name')
                    .equal('ticket_no_3');
            }));

    it('should get a ticket by id', () =>
        request(Server)
            .get('/api/v1/tickets/3')
            .expect('Content-Type', /json/)
            .then(r => {
                expect(r.body)
                    .to.be.an('object')
                    .that.has.property('name')
                    .equal('ticket_no_3');
            }));
});
