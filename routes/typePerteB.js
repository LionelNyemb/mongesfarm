const { Router } = require("express");
const route = Router();
const {
  getTypePerteBController,
  getTypePerteBByIdController,
  postTypePerteBController,
  patchTypePerteBController,
  patchTypePerteB1Controller,
  deleteTypePerteBController,
} = require("../controller/typePerteB");

route.get("/", getTypePerteBController);
route.get("/:id", getTypePerteBByIdController);
route.post("/", postTypePerteBController);
route.patch("/", patchTypePerteBController);
route.patch("/back", patchTypePerteB1Controller);
route.delete("/:id", deleteTypePerteBController);

module.exports = route;
