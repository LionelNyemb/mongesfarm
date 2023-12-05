const { Router } = require("express");
const route = Router();
const {
  getFermeController,
  getFermeByIdController,
  postFermeController,
  patchFermeController,
  deleteFermeController,
} = require("../controller/ferme");

route.get("/", getFermeController);
route.get("/:id", getFermeByIdController);
route.post("/", postFermeController);
route.patch("/", patchFermeController);
route.delete("/:id", deleteFermeController);

module.exports = route;
