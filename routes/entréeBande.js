const { Router } = require("express");
const route = Router();
const {
  getEntréeBandeController,
  getEntréeBandeByIdController,
  postEntréeBandeController,
  patchEntréeBandeController,
  patchEntréeBande1Controller,
  deleteEntréeBandeController,
} = require("../controller/entréeBande");

route.get("/", getEntréeBandeController);
route.get("/:id", getEntréeBandeByIdController);
route.post("/", postEntréeBandeController);
route.patch("/", patchEntréeBandeController);
route.patch("/back", patchEntréeBande1Controller);
route.delete("/:id", deleteEntréeBandeController);

module.exports = route;
