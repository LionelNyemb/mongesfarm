const { Router } = require("express");
const route = Router();
const {
  getOuvrierController,
  getOuvrierByIdController,
  postOuvrierController,
  patchOuvrierController,
  deleteOuvrierController,
} = require("../controller/ouvrier");

route.get("/", getOuvrierController);
route.get("/:id", getOuvrierByIdController);
route.post("/", postOuvrierController);
route.patch("/", patchOuvrierController);
route.delete("/:id", deleteOuvrierController);

module.exports = route;
