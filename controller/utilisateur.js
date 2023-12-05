const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const ms = require("");
const { secret_key } = require("../config/env");

const getUtilisateurController = async (req, res) => {
  try {
    const utilisateur = await prisma.utilisateur.findMany();
    res.send(utilisateur);
  } catch (error) {
    console.log(error);
  }
};

// const getUtilisateurByNameController = async (req, res) => {
//   try {
//     const nom = req.params.nom;
//     const utilisateur = await prisma.utilisateur.findUnique({
//       where: {
//         nom: nom,
//       },
//     });
//     res.send(utilisateur);
//   } catch (error) {
//     console.log(error);
//   }
// };

const getUtilisateurByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const utilisateur = await prisma.utilisateur.findUnique({
      where: {
        id: id,
      },
    });
    res.send(utilisateur);
  } catch (error) {
    console.log(error);
  }
};

const postUtilisateurController = async (req, res) => {
  try {
    const { nom, phone, motDePasse } = req.body;
    const hash = await bcrypt.hash(motDePasse, 10);
    const newUtilisateur = await prisma.utilisateur.create({
      data: {
        nom: nom,
        phone: parseInt(phone),
        motDePasse: hash,
      },
    });
    const id = newUtilisateur.id;
    const token = jwt.sign({ id }, secret_key);
    console.log(token);
    res.json({
      newUtilisateur: newUtilisateur,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

// const postMigrateUtilisateurController = async (req, res) => {
//   try {
//     const { nom, type, ville, phone } = req.body;
//     const utilisateur = await prisma.fournisseur.create({
//       data: {
//         nom: nom,
//         type: type,
//         ville: ville,
//         phone: phone,
//       },
//     });
//     if (utilisateur) {
//       const verify = await prisma.client.findUnique({
//         where: {
//           nom: nom,
//         },
//       });
//       if (verify) {
//         const increment = await prisma.client.update({
//           where: {
//             nom: nom,
//           },
//           data: {
//             phone: { increment: phone },
//           },
//         });
//         res.send(increment);
//       }
//       if (!verify) {
//         const add = await prisma.client.create({
//           data: {
//             nom: nom,
//             type: type,
//             ville: ville,
//             phone: phone,
//           },
//         });
//         res.send(add);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getUtilisateurByNomController = async (req, res) => {
  try {
    const { nom, motDePasse } = req.body;
    const utilisateur = await prisma.utilisateur.findUnique({
      where: {
        nom: nom,
      },
    });
    if (!utilisateur) {
      res.send("Utilisateur introuvable");
    }
    const verify = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
    if (!verify) {
      res.send("Mot de passe incorrect");
    } else {
      console.log(verify);
      const id = utilisateur.id;
      const token = jwt.sign({ id }, secret_key);
      console.log(token);
      res.json({
        utilisateur: utilisateur,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// const postEntréeUtilisateurController = async (req, res) => {
//   try {
//     const { nom, phone } = await prisma.client.create();
//     const utilisateur = await prisma.utilisateur.update({
//       where: {
//         nom: nom,
//       },
//       data: {
//         phone: { increment: phone },
//       },
//     });
//     res.send(utilisateur);
//     if (!utilisateur) {
//       console.log("designation introuvable");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const postSortieUtilisateurController = async (req, res) => {
//   try {
//     const { nom, phone } = req.body;
//     const utilisateur = await prisma.utilisateur.update({
//       where: {
//         nom: nom,
//       },
//       data: {
//         phone: { decrement: phone },
//       },
//     });
//     res.send(utilisateur);
//     if (!utilisateur) {
//       console.log("designation introuvable");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const patchUtilisateurController = async (req, res) => {
  try {
    const data = req.body;
    const { nom, phone, motDePasse } = req.body;
    const utilisateur = await prisma.utilisateur.update({
      where: {
        id: data.id,
      },
      data: {
        nom: nom,
        phone: parseInt(phone),
        motDePasse: motDePasse,
      },
    });
    res.send(utilisateur);
  } catch (error) {
    console.log(error);
  }
};

const deleteUtilisateurController = async (req, res) => {
  try {
    const id = req.params.id;
    const utilisateur = await prisma.utilisateur.delete({
      where: {
        id: id,
      },
    });
    res.send(utilisateur);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
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
};
