/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const Product = require('../src/product');
const CarInsurance = require('../src/carInsurance');

describe('Medium coverage suite', function mediumCoverageSuite() {
  it('should decrease price and sellIn', function decreasePriceAndSellIn() {
    const product = new Product('Medium Coverage', 10, 20);
    const carInsurance = new CarInsurance([product]);

    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
    expect(products[0].price).equal(product.price - 1);
    expect(products[0].sellIn).equal(product.sellIn - 1);
  });
  it('should decrease twice if sellIn < 0', function decreaseTwice() {
    const product = new Product('Medium Coverage', 0, 10);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
    expect(products[0].price).equal(8);
    expect(products[0].sellIn).equal(-1);
  });
  it('should not decrease price if its 0', function priceNotDecrease() {
    const product = new Product('Medium Coverage', 2, 0);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();
    expect(products[0].name).equal('Medium Coverage');
    expect(products[0].price).not.equal(-1);
  });
});
