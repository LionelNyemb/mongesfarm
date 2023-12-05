const { Router } = require("express");
const route = Router();
const {
  getNaissanceController,
  getNaissanceByIdController,
  postNaissanceController,
  patchNaissanceController,
  deleteNaissanceController,
} = require("../controller/naissance");

route.get("/", getNaissanceController);
route.get("/:id", getNaissanceByIdController);
route.post("/", postNaissanceController);
route.patch("/", patchNaissanceController);
route.delete("/:id", deleteNaissanceController);

module.exports = route;
