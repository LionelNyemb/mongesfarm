const { Router } = require("express");
const route = Router();
const {
  getVenteBandeController,
  getVenteBandeByIdController,
  postVenteBandeController,
  patchVenteBandeController,
  patchVenteBande1Controller,
  deleteVenteBandeController,
} = require("../controller/venteBande");

route.get("/", getVenteBandeController);
route.get("/:id", getVenteBandeByIdController);
route.post("/", postVenteBandeController);
route.patch("/", patchVenteBandeController);
route.patch("/back", patchVenteBande1Controller);
route.delete("/:id", deleteVenteBandeController);

module.exports = route;
