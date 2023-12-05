const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSortieNutritionController = async (req, res) => {
  try {
    const sortieNutrition = await prisma.sortieNutrition.findMany();
    res.send(sortieNutrition);
  } catch (error) {
    console.log(error);
  }
};

const getSortieNutritionByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieNutrition = await prisma.sortieNutrition.findUnique({
      where: {
        id: id,
      },
    });
    res.send(sortieNutrition);
  } catch (error) {
    console.log(error);
  }
};

const postSortieNutritionController = async (req, res) => {
  try {
    const { ouvrierId, batimentId, aliment, quantite, unite, note } = req.body;
    const verify1 = await prisma.nutrition.findUnique({
      where: {
        aliment: aliment,
      },
    });
    if (verify1.quantite >= req.body.quantite) {
      const sortieNutrition = await prisma.sortieNutrition.create({
        data: {
          ouvrierId: ouvrierId,
          batimentId: batimentId,
          aliment: aliment,
          quantite: parseInt(quantite),
          unite: unite,
          note: note,
        },
      });
      if (sortieNutrition) {
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
        if (!verify) {
          res.send("aliment introuvable");
        }
      }
    } else {
      res.send("quantite insuffisante");
      console.log("quantite insuffisante");
    }
  } catch (error) {
    console.log(error);
  }
};

const patchSortieNutritionController = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, batimentId, aliment, quantite, unite, note } = req.body;
    const sortieNutrition = await prisma.sortieNutrition.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        batimentId: batimentId,
        aliment: aliment,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    if (sortieNutrition) {
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

const patchSortieNutrition1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, batimentId, aliment, quantite, unite, note } = req.body;
    const sortieNutrition = await prisma.sortieNutrition.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        batimentId: batimentId,
        aliment: aliment,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    if (sortieNutrition) {
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

const deleteSortieNutritionController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieNutrition = await prisma.sortieNutrition.delete({
      where: {
        id: id,
      },
    });
    res.send(sortieNutrition);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSortieNutritionController,
  getSortieNutritionByIdController,
  postSortieNutritionController,
  patchSortieNutritionController,
  patchSortieNutrition1Controller,
  deleteSortieNutritionController,
};
