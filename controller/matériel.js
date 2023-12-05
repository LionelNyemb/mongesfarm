const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMatérielController = async (req, res) => {
  try {
    const matériel = await prisma.materiel.findMany();
    res.send(matériel);
  } catch (error) {
    console.log(error);
  }
};

const getMatérielByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const matériel = await prisma.materiel.findUnique({
      where: {
        id: id,
      },
    });
    res.send(matériel);
  } catch (error) {
    console.log(error);
  }
};

// const postMaterielController = async (req, res) => {
//   try {
//     const { batimentId, designation, quantite } = req.body;
//     const materiel = await prisma.materiel.create({
//       data: {
//         batimentId: batimentId,
//         designation: designation,
//         quantite: quantite,
//       },
//     });
//     res.send(materiel);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const patchMaterielController = async (req, res) => {
//   try {
//     const data = req.body;
//     const { batimentId, designation, quantite } = req.body;
//     const materiel = await prisma.materiel.update({
//       where: {
//         id: data.id,
//       },
//       data: {
//         batimentId: batimentId,
//         designation: designation,
//         quantite: quantite,
//       },
//     });
//     res.send(materiel);
//   } catch (error) {
//     console.log(error);
//   }
// };

const deleteMatérielController = async (req, res) => {
  try {
    const id = req.params.id;
    const matériel = await prisma.materiel.delete({
      where: {
        id: id,
      },
    });
    res.send(matériel);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMatérielController,
  getMatérielByIdController,
  // postMaterielController,
  // patchMaterielController,
  deleteMatérielController,
};
