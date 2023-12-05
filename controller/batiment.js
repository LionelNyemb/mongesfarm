const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBatimentController = async (req, res) => {
  try {
    const batiment = await prisma.batiment.findMany();
    res.send(batiment);
  } catch (error) {
    console.log(error);
  }
};

const getBatimentByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const batiment = await prisma.batiment.findUnique({
      where: {
        id: id,
      },
    });
    res.send(batiment);
  } catch (error) {
    console.log(error);
  }
};

const postBatimentController = async (req, res) => {
  try {
    const { code, designation, capacite, unite, longueur, largeur, hauteur } =
      req.body;
    const batiment = await prisma.batiment.create({
      data: {
        code: code,
        designation: designation,
        capacite: parseInt(capacite),
        unite: unite,
        longueur: longueur,
        largeur: largeur,
        hauteur: hauteur,
      },
    });
    res.send(batiment);
  } catch (error) {
    console.log(error);
  }
};

const patchBatimentController = async (req, res) => {
  try {
    const data = req.body;
    const { code, designation, capacite, unite, longueur, largeur, hauteur } =
      req.body;
    const batiment = await prisma.batiment.update({
      where: {
        id: data.id,
      },
      data: {
        code: code,
        designation: designation,
        capacite: parseInt(capacite),
        unite: unite,
        longueur: longueur,
        largeur: largeur,
        hauteur: hauteur,
      },
    });
    res.send(batiment);
  } catch (error) {
    console.log(error);
  }
};

const deleteBatimentController = async (req, res) => {
  try {
    const id = req.params.id;
    const batiment = await prisma.batiment.delete({
      where: {
        id: id,
      },
    });
    res.send(batiment);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBatimentController,
  getBatimentByIdController,
  postBatimentController,
  patchBatimentController,
  deleteBatimentController,
};
