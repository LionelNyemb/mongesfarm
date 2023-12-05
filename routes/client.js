const { Router } = require("express");
const route = Router();
const {
  getClientController,
  getClientByIdController,
  postClientController,
  patchClientController,
  deleteClientController,
} = require("../controller/client");

route.get("/", getClientController);
route.get("/:id", getClientByIdController);
route.post("/", postClientController);
route.patch("/", patchClientController);
route.delete("/:id", deleteClientController);

module.exports = route;
