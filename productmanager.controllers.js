const { Product } = require("../models/productmanager.models");

module.exports.findAllProducts = (request, response) => {
  Product.find()
    .then((allProducts) => response.json({ product: allProducts }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};
module.exports.CreateProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
