const { Router } = require("express");
const route = Router();
const {
  getMatérielController,
  getMatérielByIdController,
  // postMaterielController,
  // patchMatrielController,
  deleteMatérielController,
} = require("../controller/matériel");

route.get("/", getMatérielController);
route.get("/:id", getMatérielByIdController);
// route.post("/", postMaterielController);
// route.patch("/", patchMaterielController);
route.delete("/:id", deleteMatérielController);

module.exports = route;
