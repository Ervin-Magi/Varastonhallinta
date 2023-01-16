import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import Product from './Product';

/**
 * Tarkistaa, voiko myyjä lisätä tuotteita varastoon.
 *
 * @param {onSubmitFn} component - tavaroiden lisääminen
 * @returns {onSubmitFn} - osa painikkeen nimesta
 * @example
 *
 * kahvi: (['renders form']);
 * // => ['Apple', 54, 696969696969]
 */
const products = [{
  name: "Acer",
  amount: 54,
  sku: "696969696969"
},
{
  name: "Samsung",
  amount: 54,
  sku: "696969696969"
},
{
  name: "Apple",
  amount: 54,
  sku: "696969696969"
}
]
test('renders array of products', () => {

  const component = render(<ProductList products={products}/>)
  const element = component.getByText(/Apple/i);

});
test('renders product',() => {
  const component = render(<ProductList products={products}/>)
  expect(component.container).toHaveTextContent("Acer");

});
test('renders amount',() => {
  const component = render(<ProductList products={products}/>)
  expect(component.container).toHaveTextContent("696969696969");

});
