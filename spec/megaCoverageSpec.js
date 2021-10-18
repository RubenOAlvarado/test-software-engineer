/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe('Mega coverage suite', function mediumCoverageSuite() {
  it('should not increase price or sellIn', function decreasePriceAndSellIn() {
    const product = new Product('Mega Coverage', 0, 80);
    const carInsurance = new CarInsurance([product]);

    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
    expect(products[0].price).not.equal(product.price + 1);
    expect(products[0].sellIn).not.equal(product.sellIn - 1);
  });
  it('price should always be 80', function decreaseTwice() {
    const product = new Product('Mega Coverage', 0, 2);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Mega Coverage');
    expect(products[0].price).equal(80);
  });
});
