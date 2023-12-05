const { Router } = require("express");
const route = Router();
const {
  getVaccinationController,
  getVaccinationByIdController,
  postVaccinationController,
  patchVaccinationController,
  deleteVaccinationController,
} = require("../controller/vaccination");

route.get("/", getVaccinationController);
route.get("/:id", getVaccinationByIdController);
route.post("/", postVaccinationController);
route.patch("/", patchVaccinationController);
route.delete("/:id", deleteVaccinationController);

module.exports = route;
