const { Router } = require("express");

const route = Router();
const {
  getObservationVétérinaireController,
  getObservationVétérinaireByIdController,
  postObservationVétérinaireController,
  patchObservationVétérinaireController,
  deleteObservationVétérinaireController,
} = require("../controller/observationVétérinaire");

route.get("/", getObservationVétérinaireController);
route.get("/:id", getObservationVétérinaireByIdController);
route.post("/", postObservationVétérinaireController);
route.patch("/", patchObservationVétérinaireController);
route.delete("/:id", deleteObservationVétérinaireController);

module.exports = route;
