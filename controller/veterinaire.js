const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVeterinaireController = async (req, res) => {
  try {
    const veterinaire = await prisma.veterinaire.findMany();
    res.send(veterinaire);
  } catch (error) {
    console.log(error);
  }
};

const getVeterinaireByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const veterinaire = await prisma.veterinaire.findUnique({
      where: {
        id: id,
      },
    });
    res.send(veterinaire);
  } catch (error) {
    console.log(error);
  }
};

const postVeterinaireController = async (req, res) => {
  try {
    const { bandeId, veterinaire, traitement, posologie } = req.body;
    const veterinaires = await prisma.veterinaire.create({
      data: {
        bandeId: bandeId,
        veterinaire: veterinaire,
        traitement: traitement,
        posologie: posologie,
      },
    });
    res.send(veterinaires);
  } catch (error) {
    console.log(error);
  }
};

const patchVeterinaireController = async (req, res) => {
  try {
    const data = req.body;
    const { bandeId, veterinaire, traitement, posologie } = req.body;
    const veterinaires = await prisma.veterinaire.update({
      where: {
        id: data.id,
      },
      data: {
        bandeId: bandeId,
        veterinaire: veterinaire,
        traitement: traitement,
        posologie: posologie,
      },
    });
    res.send(veterinaires);
  } catch (error) {
    console.log(error);
  }
};

const deleteVeterinaireController = async (req, res) => {
  try {
    const id = req.params.id;
    const veterinaire = await prisma.veterinaire.delete({
      where: {
        id: id,
      },
    });
    res.send(veterinaire);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVeterinaireController,
  getVeterinaireByIdController,
  postVeterinaireController,
  patchVeterinaireController,
  deleteVeterinaireController,
};
