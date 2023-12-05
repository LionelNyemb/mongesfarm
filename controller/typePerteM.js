const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypePerteMController = async (req, res) => {
  try {
    const typePerteM = await prisma.typePerteM.findMany();
    res.send(typePerteM);
  } catch (error) {
    console.log(error);
  }
};

const getTypePerteMByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteM = await prisma.typePerteM.findUnique({
      where: {
        id: id,
      },
    });
    res.send(typePerteM);
  } catch (error) {
    console.log(error);
  }
};

const postTypePerteMController = async (req, res) => {
  try {
    const { ref, typeP, effectif, unite, description } = req.body;
    const verify1 = await prisma.materiel.findUnique({
      where: {
        designation: typeP,
      },
    });
    if (verify1.quantite >= req.body.effectif) {
      const typePerteM = await prisma.typePerteM.create({
        data: {
          ref: ref,
          typeP: typeP,
          effectif: parseInt(effectif),
          unite: unite,
          description: description,
        },
      });
      if (typePerteM) {
        const verify = await prisma.materiel.findUnique({
          where: {
            designation: typeP,
          },
        });
        if (verify) {
          const decrement = await prisma.materiel.update({
            where: {
              designation: typeP,
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

const patchTypePerteMController = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteM = await prisma.typePerteM.update({
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
    if (typePerteM) {
      const verify = await prisma.materiel.findUnique({
        where: {
          designation: typeP,
        },
      });
      if (verify) {
        const increment = await prisma.materiel.update({
          where: {
            designation: typeP,
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

const patchTypePerteM1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteM = await prisma.typePerteM.update({
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
    if (typePerteM) {
      const verify = await prisma.materiel.findUnique({
        where: {
          designation: typeP,
        },
      });
      if (verify) {
        const decrement = await prisma.materiel.update({
          where: {
            designation: typeP,
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

const deleteTypePerteMController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteM = await prisma.typePerteM.delete({
      where: {
        id: id,
      },
    });
    res.send(typePerteM);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTypePerteMController,
  getTypePerteMByIdController,
  postTypePerteMController,
  patchTypePerteMController,
  patchTypePerteM1Controller,
  deleteTypePerteMController,
};
