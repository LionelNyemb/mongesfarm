const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getFermeController = async (req, res) => {
  try {
    const ferme = await prisma.ferme.findMany();
    res.send(ferme);
  } catch (error) {
    console.log(error);
  }
};

const getFermeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const ferme = await prisma.ferme.findUnique({
      where: {
        id: id,
      },
    });
    res.send(ferme);
  } catch (error) {
    console.log(error);
  }
};

const postFermeController = async (req, res) => {
  try {
    const { nom, ville, localisation } = req.body;
    const ferme = await prisma.ferme.create({
      data: {
        nom: nom,
        ville: ville,
        localisation: localisation,
      },
    });
    res.send(ferme);
  } catch (error) {
    console.log(error);
  }
};

const patchFermeController = async (req, res) => {
  try {
    const data = req.body;
    const { nom, ville, localisation } = req.body;
    const ferme = await prisma.ferme.update({
      where: {
        id: data.id,
      },
      data: {
        nom: nom,
        ville: ville,
        localisation: localisation,
      },
    });
    res.send(ferme);
  } catch (error) {
    console.log(error);
  }
};

const deleteFermeController = async (req, res) => {
  try {
    const id = req.params.id;
    const ferme = await prisma.ferme.delete({
      where: {
        id: id,
      },
    });
    res.send(ferme);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFermeController,
  getFermeByIdController,
  postFermeController,
  patchFermeController,
  deleteFermeController,
};
