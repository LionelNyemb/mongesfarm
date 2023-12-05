const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVenteController = async (req, res) => {
  try {
    const vente = await prisma.vente.findMany();
    res.send(vente);
  } catch (error) {
    console.log(error);
  }
};

const getVenteByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const vente = await prisma.vente.findUnique({
      where: {
        id: id,
      },
    });
    res.send(vente);
  } catch (error) {
    console.log(error);
  }
};

const postVenteController = async (req, res) => {
  try {
    const { bandeId, client, montant, description, qtypu } = req.body;
    const vente = await prisma.vente.create({
      data: {
        bandeId: bandeId,
        client: client,
        montant: montant,
        qtypu: qtypu,
        description: description,
      },
    });
    res.send(vente);
  } catch (error) {
    console.log(error);
  }
};

const patchVenteController = async (req, res) => {
  try {
    const data = req.body;
    const { bandeId, client, montant, qtypu, description } = req.body;
    const vente = await prisma.vente.update({
      where: {
        id: data.id,
      },
      data: {
        bandeId: bandeId,
        client: client,
        montant: montant,
        qtypu: qtypu,
        description: description,
      },
    });
    res.send(vente);
  } catch (error) {
    console.log(error);
  }
};

const deleteVenteController = async (req, res) => {
  try {
    const id = req.params.id;
    const vente = await prisma.vente.delete({
      where: {
        id: id,
      },
    });
    res.send(vente);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVenteController,
  getVenteByIdController,
  postVenteController,
  patchVenteController,
  deleteVenteController,
};
