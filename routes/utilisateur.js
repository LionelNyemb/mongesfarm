const { Router } = require("express");
const route = Router();
const {
  getUtilisateurController,
  // getUtilisateurByNameController,
  getUtilisateurByIdController,
  postUtilisateurController,
  // postMigrateUtilisateurController,
  getUtilisateurByNomController,
  // postEntréeUtilisateurController,
  // postSortieUtilisateurController,
  patchUtilisateurController,
  deleteUtilisateurController,
} = require("../controller/utilisateur");

route.get("/", getUtilisateurController);
// route.get("/:nom", getUtilisateurByNameController);
route.get("/:id", getUtilisateurByIdController);
route.post("/", postUtilisateurController);
// route.post("/", postMigrateUtilisateurController);
route.post("/login", getUtilisateurByNomController);
// route.patch("/add", postEntréeUtilisateurController);
// route.patch("/sub", postSortieUtilisateurController);
route.patch("/", patchUtilisateurController);
route.delete("/:id", deleteUtilisateurController);

module.exports = route;
