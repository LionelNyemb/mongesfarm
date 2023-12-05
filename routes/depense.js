const { Router } = require("express");
const route = Router();
const {
  getDépenseController,
  getDépenseByIdController,
  postDépenseController,
  patchDépenseController,
  deleteDépenseController,
} = require("../controller/depense");

// sujet
// kg
// Fcfa

route.get("/", getDépenseController);
route.get("/:id", getDépenseByIdController);
route.post("/", postDépenseController);
route.patch("/", patchDépenseController);
route.delete("/:id", deleteDépenseController);

module.exports = route;
