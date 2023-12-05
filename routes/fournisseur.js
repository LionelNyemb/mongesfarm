const { Router } = require("express");
const route = Router();
const {
  getFournisseurController,
  getFournisseurByIdController,
  postFournisseurController,
  patchFournisseurController,
  deleteFournisseurController,
} = require("../controller/fournisseur");

route.get("/", getFournisseurController);
route.get("/:id", getFournisseurByIdController);
route.post("/", postFournisseurController);
route.patch("/", patchFournisseurController);
route.delete("/:id", deleteFournisseurController);

module.exports = route;
