const { productsKind } = require('./productsKind');
const {
  fullCoverage,
  megaCoverage,
  specialCoverage,
  superCoverage,
  mediumCoverage,
} = require('./coverages');

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      const { name } = this.products[i];
      switch (name) {
        case productsKind.full:
          this.products[i] = fullCoverage(this.products[i]);
          break;
        case productsKind.mega:
          this.products[i] = megaCoverage(this.products[i]);
          break;
        case productsKind.special:
          this.products[i] = specialCoverage(this.products[i]);
          break;
        case productsKind.super:
          this.products[i] = superCoverage(this.products[i]);
          break;
        default:
          this.products[i] = mediumCoverage(this.products[i]);
          break;
      }
    }
    return this.products;
  }
}

module.exports = CarInsurance;
