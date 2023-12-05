const { Router } = require("express");
const route = Router();
const {
  getEauController,
  getEauByIdController,
  postEauController,
  patchEauController,
  deleteEauController,
} = require("../controller/eau");

route.get("/", getEauController);
route.get("/:id", getEauByIdController);
route.post("/", postEauController);
route.patch("/", patchEauController);
route.delete("/:id", deleteEauController);

module.exports = route;
