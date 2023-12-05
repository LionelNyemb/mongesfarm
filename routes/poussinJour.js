const { Router } = require("express");
const route = Router();
const {
  getPoussinJourController,
  getPoussinJourByIdController,
  postPoussinJourController,
  patchPoussinJourController,
  deletePoussinJourController,
} = require("../controller/poussinJour");

route.get("/", getPoussinJourController);
route.get("/:id", getPoussinJourByIdController);
route.post("/", postPoussinJourController);
route.patch("/", patchPoussinJourController);
route.delete("/:id", deletePoussinJourController);

module.exports = route;
