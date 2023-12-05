const { Router } = require("express");
const route = Router();
const {
  getSortieMatérielController,
  getSortieMatérielByIdController,
  postSortieMatérielController,
  patchSortieMatérielController,
  patchSortieMatériel1Controller,
  deleteSortieMatérielController,
} = require("../controller/sortieMateriel");

route.get("/", getSortieMatérielController);
route.get("/:id", getSortieMatérielByIdController);
route.post("/", postSortieMatérielController);
route.patch("/", patchSortieMatérielController);
route.patch("/back", patchSortieMatériel1Controller);
route.delete("/:id", deleteSortieMatérielController);

module.exports = route;
