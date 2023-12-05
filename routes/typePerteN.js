const { Router } = require("express");
const route = Router();
const {
  getTypePerteNController,
  getTypePerteNByIdController,
  postTypePerteNController,
  patchTypePerteNController,
  patchTypePerteN1Controller,
  deleteTypePerteNController,
} = require("../controller/typePerteN");

route.get("/", getTypePerteNController);
route.get("/:id", getTypePerteNByIdController);
route.post("/", postTypePerteNController);
route.patch("/", patchTypePerteNController);
route.patch("/back", patchTypePerteN1Controller);
route.delete("/:id", deleteTypePerteNController);

module.exports = route;
