exports.fullCoverage = (product) => {
  let price = product.price < 50 ? product.price + 1 : product.price;
  const sellIn = product.sellIn - 1;

  if (product.sellIn <= 0 && price < 49) {
    price += 1;
  }

  return {
    name: product.name,
    sellIn,
    price,
  };
};

exports.megaCoverage = (product) => ({
  name: product.name,
  sellIn: product.sellIn,
  price: 80,
});

exports.specialCoverage = (product) => {
  let price = product.price < 50 ? product.price + 1 : product.price;

  const sellIn = product.sellIn - 1;
  if (sellIn < 0) {
    price = 0;

    return {
      name: product.name,
      sellIn,
      price,
    };
  }

  if (product.sellIn <= 5 && price < 47) {
    price += 2;
  } else if (product.sellIn <= 10 && price < 48) {
    price += 1;
  }

  return {
    name: product.name,
    sellIn,
    price,
  };
};

exports.superCoverage = (product) => {
  const price = product.price > 0 ? product.price - 2 : product.price;
  const sellIn = product.sellIn - 1;

  return {
    name: product.name,
    sellIn,
    price,
  };
};

exports.mediumCoverage = (product) => {
  let price = product.price > 0 ? product.price - 1 : product.price;
  const sellIn = product.sellIn - 1;

  if (sellIn <= 0 && price > 0) {
    price -= 1;
  }

  return {
    name: product.name,
    sellIn,
    price,
  };
};
