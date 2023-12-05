const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypePerteNController = async (req, res) => {
  try {
    const typePerteN = await prisma.typePerteN.findMany();
    res.send(typePerteN);
  } catch (error) {
    console.log(error);
  }
};

const getTypePerteNByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteN = await prisma.typePerteN.findUnique({
      where: {
        id: id,
      },
    });
    res.send(typePerteN);
  } catch (error) {
    console.log(error);
  }
};

const postTypePerteNController = async (req, res) => {
  try {
    const { ref, typeP, effectif, unite, description } = req.body;
    const verify1 = await prisma.nutrition.findUnique({
      where: {
        aliment: typeP,
      },
    });
    if (verify1.quantite >= req.body.effectif) {
      const typePerteN = await prisma.typePerteN.create({
        data: {
          ref: ref,
          typeP: typeP,
          effectif: parseInt(effectif),
          unite: unite,
          description: description,
        },
      });
      if (typePerteN) {
        const verify = await prisma.nutrition.findUnique({
          where: {
            aliment: typeP,
          },
        });
        if (verify) {
          const decrement = await prisma.nutrition.update({
            where: {
              aliment: typeP,
            },
            data: {
              quantite: { decrement: parseInt(effectif) },
            },
          });
          res.send(decrement);
        }
      }
    } else {
      res.send("effectif insuffisant");
      console.log("effectif insuffisant");
    }
  } catch (error) {
    console.log(error);
  }
};

const patchTypePerteNController = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteN = await prisma.typePerteN.update({
      where: {
        id: data.id,
      },
      data: {
        ref: ref,
        typeP: typeP,
        effectif: parseInt(effectif),
        unite: unite,
        description: description,
      },
    });
    if (typePerteN) {
      const verify = await prisma.nutrition.findUnique({
        where: {
          aliment: typeP,
        },
      });
      if (verify) {
        const increment = await prisma.nutrition.update({
          where: {
            aliment: typeP,
          },
          data: {
            quantite: { increment: parseInt(effectif) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchTypePerteN1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteN = await prisma.typePerteN.update({
      where: {
        id: data.id,
      },
      data: {
        ref: ref,
        typeP: typeP,
        effectif: parseInt(effectif),
        unite: unite,
        description: description,
      },
    });
    if (typePerteN) {
      const verify = await prisma.nutrition.findUnique({
        where: {
          aliment: typeP,
        },
      });
      if (verify) {
        const decrement = await prisma.nutrition.update({
          where: {
            aliment: typeP,
          },
          data: {
            quantite: { decrement: parseInt(effectif) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTypePerteNController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteN = await prisma.typePerteN.delete({
      where: {
        id: id,
      },
    });
    res.send(typePerteN);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTypePerteNController,
  getTypePerteNByIdController,
  postTypePerteNController,
  patchTypePerteNController,
  patchTypePerteN1Controller,
  deleteTypePerteNController,
};
