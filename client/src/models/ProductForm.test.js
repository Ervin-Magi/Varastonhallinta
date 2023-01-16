import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ProductForm from './ProductForm'
import renderWithi18nest from "../renderWithi18next";

const product = {
  name:'Macbook',
  amount:20,
  sku:'5'
}
test('renders form', () => {

  const compontent = renderWithi18nest(<ProductForm/>)
  const element = compontent.getByText("Nimi");

});
test('renders form with existing', () => {

  const compontent = renderWithi18nest(<ProductForm product={product} type="edit" />)
  const input = compontent.getByLabelText('Nimi')
  const sku = compontent.getByLabelText('Tuotekoodi')
const amount = compontent.getByLabelText('Määrä')
expect(input.value).toBe('Macbook')
expect(amount.value).toBe("20")

expect(sku.value).toBe('5')


});
it('gets the form state from onSubmit function', () => {
  const wrapper = document.createElement('div');
  // just return the data
  const onSubmitFn = jest.fn(data => data);
  ReactDOM.render(
    <ProductForm handlesubmit={onSubmitFn}/>,
    wrapper
  );
  const form = wrapper.querySelector('form');
  TestUtils.Simulate.submit(form);
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
