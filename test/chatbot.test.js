const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Chatbot API', () => {
    it('debería responder al saludo', (done) => {
        chai.request(server)
            .post('/chat')
            .send({ message: 'Hola' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('reply');
                expect(res.body.reply).to.equal('¡Hola! ¿Cómo puedo ayudarte?');
                done();
            });
    });

    it('debería responder con un mensaje de error', (done) => {
        chai.request(server)
            .post('/chat')
            .send({ message: '¿Qué hora es?' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('reply');
                expect(res.body.reply).to.equal('Lo siento, no entiendo tu pregunta.');
                done();
            });
    });
});
