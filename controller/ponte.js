const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPonteController = async (req, res) => {
  try {
    const ponte = await prisma.ponte.findMany();
    res.send(ponte);
  } catch (error) {
    console.log(error);
  }
};

const getPonteByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const ponte = await prisma.ponte.findUnique({
      where: {
        id: id,
      },
    });
    res.send(ponte);
  } catch (error) {
    console.log(error);
  }
};

// const postPonteController = async (req, res) => {
//   try {
//     const { batimentId, oeuf, quantite } = req.body;
//     const ponte = await prisma.ponte.create({
//       data: {
//         batimentId: batimentId,
//         oeuf: oeuf,
//         quantite: quantite,
//       },
//     });
//     res.send(ponte);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const patchPonteController = async (req, res) => {
//   try {
//     const data = req.body;
//     const { batimentId, oeuf, quantite } = req.body;
//     const ponte = await prisma.ponte.update({
//       where: {
//         id: data.id,
//       },
//       data: {
//         batimentId: batimentId,
//         oeuf: oeuf,
//         quantite: quantite,
//       },
//     });
//     res.send(ponte);
//   } catch (error) {
//     console.log(error);
//   }
// };

const deletePonteController = async (req, res) => {
  try {
    const id = req.params.id;
    const ponte = await prisma.ponte.delete({
      where: {
        id: id,
      },
    });
    res.send(ponte);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPonteController,
  getPonteByIdController,
  // postPonteController,
  // patchPonteController,
  deletePonteController,
};
