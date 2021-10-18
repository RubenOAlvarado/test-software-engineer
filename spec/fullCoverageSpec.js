/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe('Full coverage suite', function mediumCoverageSuite() {
  it('should increase price and sellIn', function decreasePriceAndSellIn() {
    const product = new Product('Full Coverage', 2, 0);
    const carInsurance = new CarInsurance([product]);

    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Full Coverage');
    expect(products[0].price).equal(product.price + 1);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
  it('should increase twice if sellIn <= 0', function decreaseTwice() {
    const product = new Product('Full Coverage', 0, 2);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Full Coverage');
    expect(products[0].price).equal(4);
    expect(products[0].sellIn).equal(-1);
  });
  it('should not increase price far 50', function priceNotDecrease() {
    const product = new Product('Full Coverage', -2, 49);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Full Coverage');
    expect(products[0].price).not.equal(51);
  });
});
