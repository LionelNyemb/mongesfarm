const { Router } = require("express");
const route = Router();
const {
  getEntréeNutritionController,
  getEntréeNutritionByIdController,
  postEntréeNutritionController,
  patchEntréeNutritionController,
  patchEntréeNutrition1Controller,
  deleteEntréeNutritionController,
} = require("../controller/entréeNutrition");

route.get("/", getEntréeNutritionController);
route.get("/:id", getEntréeNutritionByIdController);
route.post("/", postEntréeNutritionController);
route.patch("/", patchEntréeNutritionController);
route.patch("/back", patchEntréeNutrition1Controller);
route.delete("/:id", deleteEntréeNutritionController);

module.exports = route;
