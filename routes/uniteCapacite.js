const { Router } = require("express");
const route = Router();
const {
  getUniteCapaciteController,
  getUniteCapaciteByIdController,
  postUniteCapaciteController,
  patchUniteCapaciteController,
  deleteUniteCapaciteController,
} = require("../controller/uniteCapacite");

route.get("/", getUniteCapaciteController);
route.get("/:id", getUniteCapaciteByIdController);
route.post("/", postUniteCapaciteController);
route.patch("/", patchUniteCapaciteController);
route.delete("/:id", deleteUniteCapaciteController);

module.exports = route;
