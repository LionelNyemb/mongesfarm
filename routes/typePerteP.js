const { Router } = require("express");
const route = Router();
const {
  getTypePertePController,
  getTypePertePByIdController,
  postTypePertePController,
  patchTypePertePController,
  patchTypePerteP1Controller,
  deleteTypePertePController,
} = require("../controller/typePerteP");

route.get("/", getTypePertePController);
route.get("/:id", getTypePertePByIdController);
route.post("/", postTypePertePController);
route.patch("/", patchTypePertePController);
route.patch("/back", patchTypePerteP1Controller);
route.delete("/:id", deleteTypePertePController);

module.exports = route;
