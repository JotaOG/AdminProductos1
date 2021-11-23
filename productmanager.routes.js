const ProductController = require("../controllers/productmanager.controllers");
module.exports = function (app) {
  app.get("/api/product", ProductController.findAllProducts);
  app.post("/api/product", ProductController.CreateProduct);
};
