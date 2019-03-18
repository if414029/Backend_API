const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const should = chai.should()

chai.use(chaiHttp)


describe('Tax', () => {
    describe('POST new Tax', () => {
        it('it should return error 400 with message "Name cannot be empty"', (done) => {
            const tax = [
                {
                    "name": '',
                    "taxCode": 2,
                    "price": 1000
                }
            ]
            chai.request(app)
                .post('/tax')
                .send({tax})
                .end((err, res) => {
                    res.should.have.status(400)
                    res.body.status.should.be.eql('fail')
                    res.body.data.should.be.an('string')
                    res.body.data.should.be.eql('Name cannot be empty')
                    done()
                })
        })
        it('it should return error 400 with message "Tax Code cannot be empty"', (done) => {
            const tax = [
                {
                    "name": 'Lucky Strech',
                    "taxCode": '',
                    "price": 1000
                }
            ]
            chai.request(app)
                .post('/tax')
                .send({tax})
                .end((err, res) => {
                    res.should.have.status(400)
                    res.body.status.should.be.eql('fail')
                    res.body.data.should.be.an('string')
                    res.body.data.should.be.eql('Tax Code cannot be empty')
                    done()
                })
        })
        it('it should return error 400 with message "Price cannot be empty"', (done) => {
            const tax = [
                {
                    "name": 'Lucky Strech',
                    "taxCode": 2,
                    "price": ''
                }
            ]
            chai.request(app)
                .post('/tax')
                .send({tax})
                .end((err, res) => {
                    res.should.have.status(400)
                    res.body.status.should.be.eql('fail')
                    res.body.data.should.be.an('string')
                    res.body.data.should.be.eql('Price cannot be empty')
                    done()
                })
        })
        it('it should POST new Tax', (done) => {
            const tax = [
                {
                    "name": "Lucky Strech",
                    "taxCode": 2,
                    "price": 1000
                }
            ]
            chai.request(app)
                .post('/tax')
                .send({tax})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.status.should.be.eql('success')
                    res.body.data.should.be.an('array')
                    store = res.body.data
                    done()
                })
        })
    })
    describe('GET List Tax Detail', () => {
        it('it should return error 400 with message "Tax Detail Id Invalid', (done) => {
            const taxDetailId = 'jkval45q'
            chai.request(app)
                .get(`/tax/${taxDetailId}`)
                .end((err, res) => {
                    res.should.have.status(400)
                    res.body.status.should.be.eql('fail')
                    res.body.data.should.be.an('string')
                    res.body.data.should.be.eql('Tax Detail Id Invalid')
                    done()
                })
        })
        it('it should GET list Tax Detail', (done) => {
            const taxDetailId = 'jtd0ggft'
            chai.request(app)
                .get(`/tax/${taxDetailId}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.status.should.eql('success')
                    res.body.data.should.be.an('object')
                    done()
                })
        })
    })
})