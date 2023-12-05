const { Router } = require("express");

const route = Router();
const {
  getObservationFéconditéController,
  getObservationFéconditéByIdController,
  postObservationFéconditéController,
  patchObservationFéconditéController,
  patchObservationFécondité1Controller,
  deleteObservationFéconditéController,
} = require("../controller/observationFécondité");

route.get("/", getObservationFéconditéController);
route.get("/:id", getObservationFéconditéByIdController);
route.post("/", postObservationFéconditéController);
route.patch("/", patchObservationFéconditéController);
route.patch("/back", patchObservationFécondité1Controller);
route.delete("/:id", deleteObservationFéconditéController);

module.exports = route;
