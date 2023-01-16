var express = require('express');
const { response } = require('../app');
var router = express.Router();
const Product = require('../models/product')


let products =  []



router.get('/api/products', (req, res) => {
  Product.find({}).then(products => {
    res.json(products)
  })
})

router.post('/api/products', (req, res) => {
  const body = req.body

  if (body.name === undefined) {
    return res.status(400).json({ error: 'content missing' })
  }

  const product = new Product({
    name: body.name,
    amount: body.amount,
    sku: body.sku
  })

  product.save().then(savedProduct => {
    res.json(savedProduct)
  })
})
router.put('/api/products/:id', async (req,res) => {

  await Product.findByIdAndUpdate(req.params.id, 
  {"name":req.body.name,"amount":req.body.amount,"sku":req.body.sku})

  const updatedProduct = await Product.findById(req.params.id)

  console.log(updatedProduct)
  res.json(updatedProduct) 
})

router.delete('/api/products/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id)
  res.status(204).end()
})


module.exports = router;

