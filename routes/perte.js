const { Router } = require("express");
const route = Router();
const {
  getPerteController,
  getPerteByIdController,
  postPerteController,
  patchPerteController,
  deletePerteController,
  deletePerteController1,
} = require("../controller/perte");

route.get("/", getPerteController);
route.get("/:id", getPerteByIdController);
route.post("/", postPerteController);
route.patch("/", patchPerteController);
route.delete("/:id", deletePerteController);
route.delete("/", deletePerteController1);

module.exports = route;
