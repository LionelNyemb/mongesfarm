const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getNaissanceController = async (req, res) => {
  try {
    const naissance = await prisma.naissance.findMany();
    res.send(naissance);
  } catch (error) {
    console.log(error);
  }
};

const getNaissanceByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const naissance = await prisma.naissance.findUnique({
      where: {
        id: id,
      },
    });
    res.send(naissance);
  } catch (error) {
    console.log(error);
  }
};

const postNaissanceController = async (req, res) => {
  try {
    const { stockage, designation, quantite } = req.body;
    const naissance = await prisma.naissance.create({
      data: {
        stockage: stockage,
        designation: designation,
        quantite: quantite,
      },
    });
    res.send(naissance);
  } catch (error) {
    console.log(error);
  }
};

const patchNaissanceController = async (req, res) => {
  try {
    const data = req.body;
    const { stockage, designation, quantite } = req.body;
    const naissance = await prisma.naissance.update({
      where: {
        id: data.id,
      },
      data: {
        stockage: stockage,
        designation: designation,
        quantite: quantite,
      },
    });
    res.send(naissance);
  } catch (error) {
    console.log(error);
  }
};

const deleteNaissanceController = async (req, res) => {
  try {
    const id = req.params.id;
    const naissance = await prisma.naissance.delete({
      where: {
        id: id,
      },
    });
    res.send(naissance);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNaissanceController,
  getNaissanceByIdController,
  postNaissanceController,
  patchNaissanceController,
  deleteNaissanceController,
};
