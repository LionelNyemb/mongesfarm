const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypePerteBController = async (req, res) => {
  try {
    const typePerteB = await prisma.typePerteB.findMany();
    res.send(typePerteB);
  } catch (error) {
    console.log(error);
  }
};

const getTypePerteBByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteB = await prisma.typePerteB.findUnique({
      where: {
        id: id,
      },
    });
    res.send(typePerteB);
  } catch (error) {
    console.log(error);
  }
};

const postTypePerteBController = async (req, res) => {
  try {
    const { ref, typeP, effectif, unite, description } = req.body;
    const verify1 = await prisma.bande.findUnique({
      where: {
        type: typeP,
      },
    });
    if (verify1.effectif >= req.body.effectif) {
      const typePerteB = await prisma.typePerteB.create({
        data: {
          ref: ref,
          typeP: typeP,
          effectif: parseInt(effectif),
          unite: unite,
          description: description,
        },
      });
      if (typePerteB) {
        const verify = await prisma.bande.findUnique({
          where: {
            type: typeP,
          },
        });
        if (verify) {
          const decrement = await prisma.bande.update({
            where: {
              type: typeP,
            },
            data: {
              effectif: { decrement: parseInt(effectif) },
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

const patchTypePerteBController = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteB = await prisma.typePerteB.update({
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
    if (typePerteB) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: typeP,
        },
      });
      if (verify) {
        const increment = await prisma.bande.update({
          where: {
            type: typeP,
          },
          data: {
            effectif: { increment: parseInt(effectif) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchTypePerteB1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteB = await prisma.typePerteB.update({
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
    if (typePerteB) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: typeP,
        },
      });
      if (verify) {
        const decrement = await prisma.bande.update({
          where: {
            type: typeP,
          },
          data: {
            effectif: { decrement: parseInt(effectif) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTypePerteBController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteB = await prisma.typePerteB.delete({
      where: {
        id: id,
      },
    });
    res.send(typePerteB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTypePerteBController,
  getTypePerteBByIdController,
  postTypePerteBController,
  patchTypePerteBController,
  patchTypePerteB1Controller,
  deleteTypePerteBController,
};
