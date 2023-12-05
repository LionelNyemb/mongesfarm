const { Router } = require("express");
const route = Router();
const {
  getBatimentController,
  getBatimentByIdController,
  postBatimentController,
  patchBatimentController,
  deleteBatimentController,
} = require("../controller/batiment");

route.get("/", getBatimentController);
route.get("/:id", getBatimentByIdController);
route.post("/", postBatimentController);
route.patch("/", patchBatimentController);
route.delete("/:id", deleteBatimentController);

module.exports = route;
