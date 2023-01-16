const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const products = []

  const result = listHelper.dummy(products)
  expect(result).toBe(1)
})