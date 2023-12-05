const { Router } = require("express");
const route = Router();
const {
  getNutritionController,
  getNutritionByIdController,
  // postNutritionController,
  // postEntréeNutritionController,
  // patchNutritionController,
  deleteNutritionController,
} = require("../controller/nutrition");

route.get("/", getNutritionController);
route.get("/:id", getNutritionByIdController);
// route.post("/", postNutritionController);
// route.post("/add", postEntréeNutritionController);
// route.patch("/", patchNutritionController);
route.delete("/:id", deleteNutritionController);

module.exports = route;
