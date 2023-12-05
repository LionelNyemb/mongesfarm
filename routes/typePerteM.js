const { Router } = require("express");
const route = Router();
const {
  getTypePerteMController,
  getTypePerteMByIdController,
  postTypePerteMController,
  patchTypePerteMController,
  patchTypePerteM1Controller,
  deleteTypePerteMController,
} = require("../controller/typePerteM");

route.get("/", getTypePerteMController);
route.get("/:id", getTypePerteMByIdController);
route.post("/", postTypePerteMController);
route.patch("/", patchTypePerteMController);
route.patch("/back", patchTypePerteM1Controller);
route.delete("/:id", deleteTypePerteMController);

module.exports = route;
