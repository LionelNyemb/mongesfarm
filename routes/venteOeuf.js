const { Router } = require("express");
const route = Router();
const {
  getVentePonteController,
  getVentePonteByIdController,
  postVentePonteController,
  patchVentePonteController,
  patchVentePonte1Controller,
  deleteVentePonteController,
} = require("../controller/venteOeuf");

route.get("/", getVentePonteController);
route.get("/:id", getVentePonteByIdController);
route.post("/", postVentePonteController);
route.patch("/", patchVentePonteController);
route.patch("/back", patchVentePonte1Controller);
route.delete("/:id", deleteVentePonteController);

module.exports = route;
