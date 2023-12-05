const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getNutritionController = async (req, res) => {
  try {
    const nutrition = await prisma.nutrition.findMany();
    res.send(nutrition);
  } catch (error) {
    console.log(error);
  }
};

const getNutritionByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const nutrition = await prisma.nutrition.findUnique({
      where: {
        id: id,
      },
    });
    res.send(nutrition);
  } catch (error) {
    console.log(error);
  }
};

// const postNutritionController = async (req, res) => {
//   try {
//     const { bande, aliment, apportNutritif, quantite } = req.body;
//     const nutrition = await prisma.nutrition.create({
//       data: {
//         bande: bande,
//         aliment: aliment,
//         apportNutritif: apportNutritif,
//         quantite: quantite,
//       },
//     });
//     res.send(nutrition);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const postEntréeNutritionController = async (req, res) => {
//   try {
//     const { aliment, quantite } = req.body;
//     const nutrition = await prisma.nutrition.findUnique({
//       where: {
//         aliment: aliment,
//       },
//       data: {
//         quantite: { increment: quantite },
//       },
//     });
//     if (!nutrition) {
//       console.log("designation introuvable");
//     }
//     res.send(nutrition);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const patchNutritionController = async (req, res) => {
//   try {
//     const data = req.body;
//     const { stockage, designation, quantite } = req.body;
//     const nutrition = await prisma.nutrition.update({
//       where: {
//         id: data.id,
//       },
//       data: {
//         stockage: stockage,
//         designation: designation,
//         quantite: quantite,
//       },
//     });
//     res.send(nutrition);
//   } catch (error) {
//     console.log(error);
//   }
// };

const deleteNutritionController = async (req, res) => {
  try {
    const id = req.params.id;
    const nutrition = await prisma.nutrition.delete({
      where: {
        id: id,
      },
    });
    res.send(nutrition);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNutritionController,
  getNutritionByIdController,
  // postNutritionController,
  // postEntréeNutritionController,
  // patchNutritionController,
  deleteNutritionController,
};
