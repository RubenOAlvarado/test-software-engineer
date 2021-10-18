/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe('Special full coverage suite', function mediumCoverageSuite() {
  it('should increase price and decrease sellIn', function decreasePriceAndSellIn() {
    const product = new Product('Special Full Coverage', 15, 20);
    const carInsurance = new CarInsurance([product]);

    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].price).equal(product.price + 1);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
  it('price should be 0 when sellIn < 0', function priceZero() {
    const product = new Product('Special Full Coverage', -2, 35);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].price).equal(0);
  });
  it('should increase price twice if sellIn <= 10', function increaseTwice() {
    const product = new Product('Special Full Coverage', 8, 6);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].price).equal(8);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
  it('should increase price thrice if sellIn <= 5', function increaseTwice() {
    const product = new Product('Special Full Coverage', 5, 35);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].price).equal(38);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
});
