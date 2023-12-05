const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getFournisseurController = async (req, res) => {
  try {
    const fournisseur = await prisma.fournisseur.findMany();
    res.send(fournisseur);
  } catch (error) {
    console.log(error);
  }
};

const getFournisseurByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const fournisseur = await prisma.fournisseur.findUnique({
      where: {
        id: id,
      },
    });
    res.send(fournisseur);
  } catch (error) {
    console.log(error);
  }
};

const postFournisseurController = async (req, res) => {
  try {
    const { nom, ville, phone } = req.body;
    const fournisseur = await prisma.fournisseur.create({
      data: {
        nom: nom,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(fournisseur);
  } catch (error) {
    console.log(error);
  }
};

const patchFournisseurController = async (req, res) => {
  try {
    const data = req.body;
    const { nom, ville, phone } = req.body;
    const fournisseur = await prisma.fournisseur.update({
      where: {
        id: data.id,
      },
      data: {
        nom: nom,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(fournisseur);
  } catch (error) {
    console.log(error);
  }
};

const deleteFournisseurController = async (req, res) => {
  try {
    const id = req.params.id;
    const fournisseur = await prisma.fournisseur.delete({
      where: {
        id: id,
      },
    });
    res.send(fournisseur);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFournisseurController,
  getFournisseurByIdController,
  postFournisseurController,
  patchFournisseurController,
  deleteFournisseurController,
};
