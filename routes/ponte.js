const { Router } = require("express");
const route = Router();
const {
  getPonteController,
  getPonteByIdController,
  // postPonteController,
  // patchPonteController,
  deletePonteController,
} = require("../controller/ponte");

route.get("/", getPonteController);
route.get("/:id", getPonteByIdController);
// route.post("/", postPonteController);
// route.patch("/", patchPonteController);
route.delete("/:id", deletePonteController);

module.exports = route;
