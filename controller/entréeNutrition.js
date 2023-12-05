const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEntréeNutritionController = async (req, res) => {
  try {
    const entréeNutrition = await prisma.entrerNutrition.findMany();
    res.send(entréeNutrition);
  } catch (error) {
    console.log(error);
  }
};

const getEntréeNutritionByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeNutrition = await prisma.entrerNutrition.findUnique({
      where: {
        id: id,
      },
    });
    res.send(entréeNutrition);
  } catch (error) {
    console.log(error);
  }
};

const postEntréeNutritionController = async (req, res) => {
  try {
    const { batimentId, aliment, apportNutritif, quantite, unite } = req.body;
    const entréeNutrition = await prisma.entrerNutrition.create({
      data: {
        batimentId: batimentId,
        aliment: aliment,
        apportNutritif: apportNutritif,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeNutrition) {
      const verify = await prisma.nutrition.findUnique({
        where: {
          aliment: aliment,
        },
      });
      if (verify) {
        const increment = await prisma.nutrition.update({
          where: {
            aliment: aliment,
          },
          data: {
            quantite: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
      if (!verify) {
        const add = await prisma.nutrition.create({
          data: {
            batimentId: batimentId,
            aliment: aliment,
            apportNutritif: apportNutritif,
            quantite: parseInt(quantite),
            unite: unite,
          },
        });
        res.send(add);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchEntréeNutritionController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, aliment, apportNutritif, quantite, unite } = req.body;
    const entréeNutrition = await prisma.entrerNutrition.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        aliment: aliment,
        apportNutritif: apportNutritif,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeNutrition) {
      const verify = await prisma.nutrition.findUnique({
        where: {
          aliment: aliment,
        },
      });
      if (verify) {
        const decrement = await prisma.nutrition.update({
          where: {
            aliment: aliment,
          },
          data: {
            quantite: { decrement: parseInt(quantite) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchEntréeNutrition1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, aliment, apportNutritif, quantite, unite } = req.body;
    const entréeNutrition = await prisma.entrerNutrition.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        aliment: aliment,
        apportNutritif: apportNutritif,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeNutrition) {
      const verify = await prisma.nutrition.findUnique({
        where: {
          aliment: aliment,
        },
      });
      if (verify) {
        const increment = await prisma.nutrition.update({
          where: {
            aliment: aliment,
          },
          data: {
            quantite: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteEntréeNutritionController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeNutrition = await prisma.entrerNutrition.delete({
      where: {
        id: id,
      },
    });
    res.send(entréeNutrition);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEntréeNutritionController,
  getEntréeNutritionByIdController,
  postEntréeNutritionController,
  patchEntréeNutritionController,
  patchEntréeNutrition1Controller,
  deleteEntréeNutritionController,
};
