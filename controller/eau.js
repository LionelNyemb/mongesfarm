const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEauController = async (req, res) => {
  try {
    const eau = await prisma.eau.findMany();
    res.send(eau);
  } catch (error) {
    console.log(error);
  }
};

const getEauByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const eau = await prisma.eau.findUnique({
      where: {
        id: id,
      },
    });
    res.send(eau);
  } catch (error) {
    console.log(error);
  }
};

const postEauController = async (req, res) => {
  try {
    const { ouvrierId, quantite, unite, note } = req.body;
    const eau = await prisma.eau.create({
      data: {
        ouvrierId: ouvrierId,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    res.send(eau);
  } catch (error) {
    console.log(error);
  }
};

const patchEauController = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, quantite, unite, note } = req.body;
    const eau = await prisma.eau.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    res.send(eau);
  } catch (error) {
    console.log(error);
  }
};

const deleteEauController = async (req, res) => {
  try {
    const id = req.params.id;
    const eau = await prisma.eau.delete({
      where: {
        id: id,
      },
    });
    res.send(eau);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEauController,
  getEauByIdController,
  postEauController,
  patchEauController,
  deleteEauController,
};
