const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getOuvrierController = async (req, res) => {
  try {
    const ouvrier = await prisma.ouvrier.findMany();
    res.send(ouvrier);
  } catch (error) {
    console.log(error);
  }
};

const getOuvrierByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const ouvrier = await prisma.ouvrier.findUnique({
      where: {
        id: id,
      },
    });
    res.send(ouvrier);
  } catch (error) {
    console.log(error);
  }
};

const postOuvrierController = async (req, res) => {
  try {
    const { nom, fonction, ville, phone } = req.body;
    const ouvrier = await prisma.ouvrier.create({
      data: {
        nom: nom,
        fonction: fonction,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(ouvrier);
    res.send;
  } catch (error) {
    console.log(error);
  }
};

const patchOuvrierController = async (req, res) => {
  try {
    const data = req.body;
    const { nom, fonction, ville, phone } = req.body;
    const ouvrier = await prisma.ouvrier.update({
      where: {
        id: data.id,
      },
      data: {
        nom: nom,
        fonction: fonction,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(ouvrier);
    res.send;
  } catch (error) {
    console.log(error);
  }
};

const deleteOuvrierController = async (req, res) => {
  try {
    const id = req.params.id;
    const ouvrier = await prisma.ouvrier.delete({
      where: {
        id: id,
      },
    });
    res.send(ouvrier);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getOuvrierController,
  getOuvrierByIdController,
  postOuvrierController,
  patchOuvrierController,
  deleteOuvrierController,
};
