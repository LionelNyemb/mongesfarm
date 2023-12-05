const { Router } = require("express");
const route = Router();
const {
  getEntréeMatérielController,
  getEntréeMatérielByIdController,
  postEntréeMatérielController,
  patchEntréeMatérielController,
  patchEntréeMatériel1Controller,
  deleteEntréeMatérielController,
} = require("../controller/entréeMatériel");

route.get("/", getEntréeMatérielController);
route.get("/:id", getEntréeMatérielByIdController);
route.post("/", postEntréeMatérielController);
route.patch("/", patchEntréeMatérielController);
route.patch("/back", patchEntréeMatériel1Controller);
route.delete("/:id", deleteEntréeMatérielController);

module.exports = route;
