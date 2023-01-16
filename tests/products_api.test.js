const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Product = require('../models/product')

const api = supertest(app)


const initialProducts = [
  {
    name: 'macbookair',
    amount: 55,
    sku: '111'
  },
  {
    name: 'lenovo',
    amount: 12,
    sku: '222'
  },
  {
    name: 'hp',
    amount: 5,
    sku: '333'
  }
  
]
beforeEach(async () => {
  await Product.deleteMany({})

  let productObject = new Product(initialProducts[0])
  await productObject.save()

  productObject = new Product(initialProducts[1])
  await productObject.save()

  productObject = new Product(initialProducts[2])
  await productObject.save()
})
afterAll(() => {
  mongoose.connection.close()
})

test('all products are returned', async () => {
  const response = await api.get('/api/products')

  expect(response.body).toHaveLength(initialProducts.length)})

test('a specific product is within the returned products', async () => {
  const response = await api.get('/api/products')

  const contents = response.body.map(r => r.name)
  expect(contents).toContain(
    'macbookair'  )
})
test('a specific product is deleted from products', async () => {
  
  const response = await api.get('/api/products')

  const productsAtStart = response.body

  const productToDelete = productsAtStart[0]

  await api    
    .delete(`/api/products/${productToDelete.id}`)    
    .expect(204)

})
/* test('a speficif product is modified in productlist', async () => {
  
  


}) */