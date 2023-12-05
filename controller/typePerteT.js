const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypePerteTController = async (req, res) => {
  try {
    const typePerteT = await prisma.typePerteT.findMany();
    res.send(typePerteT);
  } catch (error) {
    console.log(error);
  }
};

const getTypePerteTByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteT = await prisma.typePerteT.findUnique({
      where: {
        id: id,
      },
    });
    res.send(typePerteT);
  } catch (error) {
    console.log(error);
  }
};

const postTypePerteTController = async (req, res) => {
  try {
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteT = await prisma.typePerteT.create({
      data: {
        ref: ref,
        typeP: typeP,
        effectif: parseInt(effectif),
        unite: unite,
        description: description,
      },
    });
    if (typePerteT) {
      const verify = await prisma.batiment.findUnique({
        where: {
          code: typeP,
        },
      });
      if (verify) {
        const typePerteT = await prisma.batiment.delete({
          where: {
            code: typeP,
          },
        });
        res.send(typePerteT);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchTypePerteTController = async (req, res) => {
  try {
    const data = req.body;
    const { ref, typeP, effectif, unite, description } = req.body;
    const typePerteT = await prisma.typePerteT.update({
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
    res.send(typePerteT);
  } catch (error) {
    console.log(error);
  }
};

const deleteTypePerteTController = async (req, res) => {
  try {
    const id = req.params.id;
    const typePerteT = await prisma.typePerteT.delete({
      where: {
        id: id,
      },
    });
    res.send(typePerteT);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTypePerteTController,
  getTypePerteTByIdController,
  postTypePerteTController,
  patchTypePerteTController,
  deleteTypePerteTController,
};
