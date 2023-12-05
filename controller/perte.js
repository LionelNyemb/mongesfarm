const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPerteController = async (req, res) => {
  try {
    const perte = await prisma.perte.findMany();
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

const getPerteByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const perte = await prisma.perte.findUnique({
      where: {
        id: id,
      },
    });
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

const postPerteController = async (req, res) => {
  try {
    const { type } = req.body;
    const perte = await prisma.perte.create({
      data: {
        type: type,
      },
    });
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

const patchPerteController = async (req, res) => {
  try {
    const data = req.body;
    const { type } = req.body;
    const perte = await prisma.perte.update({
      where: {
        id: data.id,
      },
      data: {
        type: type,
      },
    });
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

const deletePerteController = async (req, res) => {
  try {
    const id = req.params.id;
    const perte = await prisma.perte.delete({
      where: {
        id: id,
      },
    });
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

const deletePerteController1 = async (req, res) => {
  try {
    const id = req.params.id;
    const perte = await prisma.perte.deleteMany({
      where: {
        id: id,
      },
    });
    res.send(perte);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPerteController,
  getPerteByIdController,
  postPerteController,
  patchPerteController,
  deletePerteController,
  deletePerteController1,
};
