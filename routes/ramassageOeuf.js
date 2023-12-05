const { Router } = require("express");
const route = Router();
const {
  getRamassageOeufController,
  getRamassageOeufByIdController,
  postRamassageOeufController,
  patchRamassageOeufController,
  deleteRamassageOeufController,
} = require("../controller/ramassageOeuf");

route.get("/", getRamassageOeufController);
route.get("/:id", getRamassageOeufByIdController);
route.post("/", postRamassageOeufController);
route.patch("/", patchRamassageOeufController);
route.delete("/:id", deleteRamassageOeufController);

module.exports = route;
