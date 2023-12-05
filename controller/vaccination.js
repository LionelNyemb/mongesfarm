const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVaccinationController = async (req, res) => {
  try {
    const vaccination = await prisma.vaccination.findMany();
    res.send(vaccination);
  } catch (error) {
    console.log(error);
  }
};

const getVaccinationByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const vaccination = await prisma.vaccination.findUnique({
      where: {
        id: id,
      },
    });
    res.send(vaccination);
  } catch (error) {
    console.log(error);
  }
};

const postVaccinationController = async (req, res) => {
  try {
    const {
      bandeId,
      vaccin,
      periode,
      periode1,
      indication,
      posologie,
      statut,
    } = req.body;
    const vaccinations = await prisma.vaccination.create({
      data: {
        bandeId: bandeId,
        vaccin: vaccin,
        periode: periode,
        periode1: periode1,
        indication: indication,
        posologie: posologie,
        statut: statut,
      },
    });
    res.send(vaccinations);
  } catch (error) {
    console.log(error);
  }
};

const patchVaccinationController = async (req, res) => {
  try {
    const data = req.body;
    const {
      bandeId,
      vaccin,
      periode,
      periode1,
      indication,
      posologie,
      statut,
    } = req.body;
    const vaccinations = await prisma.vaccination.update({
      where: {
        id: data.id,
      },
      data: {
        bandeId: bandeId,
        vaccin: vaccin,
        periode: periode,
        periode1: periode1,
        indication: indication,
        posologie: posologie,
        statut: statut,
      },
    });
    res.send(vaccinations);
  } catch (error) {
    console.log(error);
  }
};

const deleteVaccinationController = async (req, res) => {
  try {
    const id = req.params.id;
    const vaccination = await prisma.vaccination.delete({
      where: {
        id: id,
      },
    });
    res.send(vaccination);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVaccinationController,
  getVaccinationByIdController,
  postVaccinationController,
  patchVaccinationController,
  deleteVaccinationController,
};
