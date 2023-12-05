const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPoussinJourController = async (req, res) => {
  try {
    const poussinJour = await prisma.poussin.findMany();
    res.send(poussinJour);
  } catch (error) {
    console.log(error);
  }
};

const getPoussinJourByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const poussinJour = await prisma.poussin.findUnique({
      where: {
        id: id,
      },
    });
    res.send(poussinJour);
  } catch (error) {
    console.log(error);
  }
};

const postPoussinJourController = async (req, res) => {
  try {
    const { batimentId, bandeId, effectif } = req.body;
    const poussinJour = await prisma.poussin.create({
      data: {
        batimentId: batimentId,
        bandeId: bandeId,
        effectif: effectif,
      },
    });
    res.send(poussinJour);
  } catch (error) {
    console.log(error);
  }
};

const patchPoussinJourController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, bandeId, effectif } = req.body;
    const poussinJour = await prisma.poussin.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        bandeId: bandeId,
        effectif: effectif,
      },
    });
    res.send(poussinJour);
  } catch (error) {
    console.log(error);
  }
};

const deletePoussinJourController = async (req, res) => {
  try {
    const id = req.params.id;
    const poussinJour = await prisma.poussin.delete({
      where: {
        id: id,
      },
    });
    res.send(poussinJour);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPoussinJourController,
  getPoussinJourByIdController,
  postPoussinJourController,
  patchPoussinJourController,
  deletePoussinJourController,
};
