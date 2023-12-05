const { Router } = require("express");
const route = Router();
const {
  getVeterinaireController,
  getVeterinaireByIdController,
  postVeterinaireController,
  patchVeterinaireController,
  deleteVeterinaireController,
} = require("../controller/veterinaire");

route.get("/", getVeterinaireController);
route.get("/:id", getVeterinaireByIdController);
route.post("/", postVeterinaireController);
route.patch("/", patchVeterinaireController);
route.delete("/:id", deleteVeterinaireController);

module.exports = route;
