const { Router } = require("express");
const route = Router();
const {
  getSortieNutritionController,
  getSortieNutritionByIdController,
  postSortieNutritionController,
  patchSortieNutritionController,
  patchSortieNutrition1Controller,
  deleteSortieNutritionController,
} = require("../controller/sortieNutrition");

route.get("/", getSortieNutritionController);
route.get("/:id", getSortieNutritionByIdController);
route.post("/", postSortieNutritionController);
route.patch("/", patchSortieNutritionController);
route.patch("/back", patchSortieNutrition1Controller);
route.delete("/:id", deleteSortieNutritionController);

module.exports = route;
