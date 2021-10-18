/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const { Product } = require('../src/product');
const { CarInsurance } = require('../src/carInsurance');

describe('Product test suite', function suite() {
  it('should foo', function foo() {
    const coTest = new CarInsurance([new Product('foo', 0, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('foo');
  });
});
