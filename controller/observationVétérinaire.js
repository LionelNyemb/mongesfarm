const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getObservationVétérinaireController = async (req, res) => {
  try {
    const observationVétérinaire =
      await prisma.veterinaireObservation.findMany();
    res.send(observationVétérinaire);
  } catch (error) {
    console.log(error);
  }
};

const getObservationVétérinaireByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const observationVétérinaire =
      await prisma.veterinaireObservation.findUnique({
        where: {
          id: id,
        },
      });
    res.send(observationVétérinaire);
  } catch (error) {
    console.log(error);
  }
};

const postObservationVétérinaireController = async (req, res) => {
  try {
    const { bandeId, batimentId, observation1, observation2, observation3 } =
      req.body;
    const observationVétérinaire = await prisma.veterinaireObservation.create({
      data: {
        bandeId: bandeId,
        batimentId: batimentId,
        observation1: observation1,
        observation2: observation2,
        observation3: observation3,
      },
    });
    res.send(observationVétérinaire);
  } catch (error) {
    console.log(error);
  }
};

const patchObservationVétérinaireController = async (req, res) => {
  try {
    const data = req.body;
    const { bandeId, batimentId, observation1, observation2, observation3 } =
      req.body;
    const observationVétérinaire = await prisma.veterinaireObservation.update({
      where: {
        id: data.id,
      },
      data: {
        bandeId: bandeId,
        batimentId: batimentId,
        observation1: observation1,
        observation2: observation2,
        observation3: observation3,
      },
    });
    res.send(observationVétérinaire);
  } catch (error) {
    console.log(error);
  }
};

const deleteObservationVétérinaireController = async (req, res) => {
  try {
    const id = req.params.id;
    const observationVétérinaire = await prisma.veterinaireObservation.delete({
      where: {
        id: id,
      },
    });
    res.send(observationVétérinaire);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getObservationVétérinaireController,
  getObservationVétérinaireByIdController,
  postObservationVétérinaireController,
  patchObservationVétérinaireController,
  deleteObservationVétérinaireController,
};
