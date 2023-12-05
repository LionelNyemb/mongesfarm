const { Router } = require("express");
const route = Router();
const {
  getSortieOeufController,
  getSortieOeufByIdController,
  postSortieOeufController,
  patchSortieOeufController,
  deleteSortieOeufController,
} = require("../controller/sortieOeuf");

route.get("/", getSortieOeufController);
route.get("/:id", getSortieOeufByIdController);
route.post("/", postSortieOeufController);
route.patch("/", patchSortieOeufController);
route.delete("/:id", deleteSortieOeufController);

module.exports = route;
