const { PrismaClient } = require("@prisma/client");
const dayjs = require("dayjs");
const prisma = new PrismaClient();

const getRamassageOeufController = async (req, res) => {
  try {
    const ramassageOeuf = await prisma.ramassageOeuf.findMany();
    res.send(ramassageOeuf);
    console.log(ramassageOeuf);
  } catch (error) {
    console.log(error);
  }
};

const getRamassageOeufByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const ramassageOeuf = await prisma.ramassageOeuf.findUnique({
      where: {
        id: id,
      },
    });
    res.send(ramassageOeuf);
  } catch (error) {
    console.log(error);
  }
};

const postRamassageOeufController = async (req, res) => {
  try {
    const { ouvrierId, bandeId, batimentId, gros, moyen, unite } = req.body;
    const ramassageOeuf = await prisma.ramassageOeuf.create({
      data: {
        ouvrierId: ouvrierId,
        bandeId: bandeId,
        batimentId: batimentId,
        gros: parseInt(gros),
        moyen: parseInt(moyen),
        unite: unite,
      },
    });
    res.send(ramassageOeuf);
    console.log(ramassageOeuf.createdAt);
  } catch (error) {
    console.log(error);
  }
};

const patchRamassageOeufController = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, bandeId, batimentId, gros, moyen, unite } = req.body;
    const ramassageOeuf = await prisma.ramassageOeuf.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        bandeId: bandeId,
        batimentId: batimentId,
        gros: parseInt(gros),
        moyen: parseInt(moyen),
        unite: unite,
      },
    });
    res.send(ramassageOeuf);
  } catch (error) {
    console.log(error);
  }
};

const deleteRamassageOeufController = async (req, res) => {
  try {
    const id = req.params.id;
    const ramassageOeuf = await prisma.ramassageOeuf.delete({
      where: {
        id: id,
      },
    });
    res.send(ramassageOeuf);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRamassageOeufController,
  getRamassageOeufByIdController,
  postRamassageOeufController,
  patchRamassageOeufController,
  deleteRamassageOeufController,
};
