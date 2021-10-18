/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe('Super Sale suite', function mediumCoverageSuite() {
  it('should decrease twice price and decrease sellIn', function decreasePriceAndSellIn() {
    const product = new Product('Super Sale', 3, 6);
    const carInsurance = new CarInsurance([product]);

    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Super Sale');
    expect(products[0].price).equal(product.price - 2);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
  it('price should not be less than 0', function maxPrice() {
    const product = new Product('Super Sale', 0, 0);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Super Sale');
    expect(products[0].price).not.equal(-1);
    expect(products[0].sellIn).equal(-1);
  });
});
