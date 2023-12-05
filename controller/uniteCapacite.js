const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUniteCapaciteController = async (req, res) => {
  try {
    const uniteCapacite = await prisma.uniteCapacite.findMany();
    res.send(uniteCapacite);
  } catch (error) {
    console.log(error);
  }
};

const getUniteCapaciteByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const uniteCapacite = await prisma.uniteCapacite.findUnique({
      where: {
        id: id,
      },
    });
    res.send(uniteCapacite);
  } catch (error) {
    console.log(error);
  }
};

const postUniteCapaciteController = async (req, res) => {
  try {
    const { forme, unite, monait } = req.body;
    const uniteCapacite = await prisma.uniteCapacite.create({
      data: {
        forme: forme,
        unite: unite,
        monait: monait,
      },
    });
    res.send(uniteCapacite);
  } catch (error) {
    console.log(error);
  }
};

const patchUniteCapaciteController = async (req, res) => {
  try {
    const data = req.body;
    const { forme, unite, monait } = req.body;
    const uniteCapacite = await prisma.uniteCapacite.update({
      where: {
        id: data.id,
      },
      data: {
        forme: forme,
        unite: unite,
        monait: monait,
      },
    });
    res.send(uniteCapacite);
  } catch (error) {
    console.log(error);
  }
};

const deleteUniteCapaciteController = async (req, res) => {
  try {
    const id = req.params.id;
    const uniteCapacite = await prisma.uniteCapacite.delete({
      where: {
        id: id,
      },
    });
    res.send(uniteCapacite);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUniteCapaciteController,
  getUniteCapaciteByIdController,
  postUniteCapaciteController,
  patchUniteCapaciteController,
  deleteUniteCapaciteController,
};
