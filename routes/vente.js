const { Router } = require("express");
const route = Router();
const {
  getVenteController,
  getVenteByIdController,
  postVenteController,
  patchVenteController,
  deleteVenteController,
} = require("../controller/vente");

route.get("/", getVenteController);
route.get("/:id", getVenteByIdController);
route.post("/", postVenteController);
route.patch("/", patchVenteController);
route.delete("/:id", deleteVenteController);

module.exports = route;
