const { Router } = require("express");
const route = Router();
const {
  getTypePerteTController,
  getTypePerteTByIdController,
  postTypePerteTController,
  patchTypePerteTController,
  deleteTypePerteTController,
} = require("../controller/typePerteT");

route.get("/", getTypePerteTController);
route.get("/:id", getTypePerteTByIdController);
route.post("/", postTypePerteTController);
route.patch("/", patchTypePerteTController);
route.delete("/:id", deleteTypePerteTController);

module.exports = route;
