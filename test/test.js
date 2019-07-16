const app = require('../src/app');

const chai = require("chai");
chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('/POST convertToEuro', () => {
    it('it should convert any USD amount to EUR', () => {
        chai.request(app)
            .post('/currency/convertToEuro')
            .send({
                "amount": 30,
                "symbol": "USD"
            })
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.have.property("convertedAmount");
             });
    });
});