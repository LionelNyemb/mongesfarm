const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypePertePController = async (req, res) => {
  try {
    const typePerteP = await prisma.typePerteP.findMany();
    res.send(typePerteP);
  } catch (error) {
    console.log(error);
  }
};

const getTypePertePByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteP = await prisma.typePerteP.findUnique({
      where: {
        id: id,
      },
    });
    res.send(typePerteP);
  } catch (error) {
    console.log(error);
  }
};

const postTypePertePController = async (req, res) => {
  try {
    const { ref, typeP, effectif, unite, description } = req.body;
    const verify1 = await prisma.ponte.findUnique({
      where: {
        oeuf: typeP,
      },
    });
    if (verify1.quantite >= req.body.effectif) {
      const typePerteP = await prisma.typePerteP.create({
        data: {
          ref: ref,
          typeP: typeP,
          effectif: parseInt(effectif),
          unite: unite,
          description: description,
        },
      });
      if (typePerteP) {
        const verify = await prisma.ponte.findUnique({
          where: {
            oeuf: typeP,
          },
        });
        if (verify) {
          const decrement = await prisma.ponte.update({
            where: {
              oeuf: typeP,
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

const patchTypePertePController = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteP = await prisma.typePerteP.update({
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
    if (typePerteP) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: typeP,
        },
      });
      if (verify) {
        const increment = await prisma.ponte.update({
          where: {
            oeuf: typeP,
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

const patchTypePerteP1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteP = await prisma.typePerteP.update({
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
    if (typePerteP) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: typeP,
        },
      });
      if (verify) {
        const decrement = await prisma.ponte.update({
          where: {
            oeuf: typeP,
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

const deleteTypePertePController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteP = await prisma.typePerteP.delete({
      where: {
        id: id,
      },
    });
    res.send(typePerteP);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTypePertePController,
  getTypePertePByIdController,
  postTypePertePController,
  patchTypePertePController,
  patchTypePerteP1Controller,
  deleteTypePertePController,
};
