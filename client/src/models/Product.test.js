import React from 'react';

import Product from './Product'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

test('renders array of product', () => {


  const component = render(<table><tfoot><tr><Product  item={{name:"Apple",amount:54,sku:"696969696969"}}/></tr></tfoot></table>)
  const element = component.getByText(/Apple/i);

});

test('renders array of product', () => {
  const wrapper = document.createElement('div');
  // just return the data
  const onSubmitFn = jest.fn(data => data);
  ReactDOM.render(
    <table><tfoot><tr><Product action={onSubmitFn} item={{name:"Apple",amount:54,sku:"696969696969"}}/></tr></tfoot></table>,
    wrapper
  );
  const form = wrapper.querySelector('table:first-child td:first-child');
  TestUtils.Simulate.click(form);
  expect(onSubmitFn).toHaveBeenCalledTimes(1);


});
