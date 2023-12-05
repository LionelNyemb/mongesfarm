const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSortieOeufController = async (req, res) => {
  try {
    const sortieOeuf = await prisma.sortieOeuf.findMany();
    res.send(sortieOeuf);
  } catch (error) {
    console.log(error);
  }
};

const getSortieOeufByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieOeuf = await prisma.sortieOeuf.findUnique({
      where: {
        id: id,
      },
    });
    res.send(sortieOeuf);
  } catch (error) {
    console.log(error);
  }
};

const postSortieOeufController = async (req, res) => {
  try {
    const { ouvrierId, stock, note, quantite } = req.body;
    const sortieOeuf = await prisma.sortieOeuf.create({
      data: {
        ouvrierId: ouvrierId,
        stock: stock,
        note: note,
        quantite: quantite,
      },
    });
    res.send(sortieOeuf);
  } catch (error) {
    console.log(error);
  }
};

const patchSortieOeufController = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, stock, note, quantite } = req.body;
    const sortieOeuf = await prisma.sortieOeuf.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        stock: stock,
        note: note,
        quantite: quantite,
      },
    });
    res.send(sortieOeuf);
  } catch (error) {
    console.log(error);
  }
};

const deleteSortieOeufController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieOeuf = await prisma.sortieOeuf.delete({
      where: {
        id: id,
      },
    });
    res.send(sortieOeuf);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSortieOeufController,
  getSortieOeufByIdController,
  postSortieOeufController,
  patchSortieOeufController,
  deleteSortieOeufController,
};
