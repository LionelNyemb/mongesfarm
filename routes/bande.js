const { Router } = require("express");
const route = Router();
const {
  getBandeController,
  getBandeByIdController,
  deleteBandeController,
} = require("../controller/bande");

route.get("/", getBandeController);
// route.get("/filtre/:start/:end", getDateBandeController);
route.get("/:id", getBandeByIdController);
route.delete("/:id", deleteBandeController);

module.exports = route;
