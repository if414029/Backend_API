const express = require('express')
const tax = require('./tax.js')
const response = require('../../lib/response')
const router = express.Router()

router.get('/:id', async (req, res) => {
    req.body.taxDetailId = req.params.id
    const result = await tax.get(req.body)
    return response(res, result.code, result.data)
})
router.post('/', async (req, res) => {
    const result = await tax.create(req.body)
    return response(res, result.code, result.data)
})

module.exports = router