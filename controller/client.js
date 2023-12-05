const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getClientController = async (req, res) => {
  try {
    const client = await prisma.client.findMany();
    res.send(client);
  } catch (error) {
    console.log(error);
  }
};

const getClientByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await prisma.client.findUnique({
      where: {
        id: id,
      },
    });
    res.send(client);
  } catch (error) {
    console.log(error);
  }
};

const postClientController = async (req, res) => {
  try {
    const { nom, ville, phone } = req.body;
    const client = await prisma.client.create({
      data: {
        nom: nom,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(client);
  } catch (error) {
    console.log(error);
  }
};

const patchClientController = async (req, res) => {
  try {
    const data = req.body;
    const { nom, ville, phone } = req.body;
    const client = await prisma.client.update({
      where: {
        id: data.id,
      },
      data: {
        nom: nom,
        ville: ville,
        phone: parseInt(phone),
      },
    });
    res.send(client);
  } catch (error) {
    console.log(error);
  }
};

const deleteClientController = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await prisma.client.delete({
      where: {
        id: id,
      },
    });
    res.send(client);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getClientController,
  getClientByIdController,
  postClientController,
  patchClientController,
  deleteClientController,
};
