const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBandeController = async (req, res) => {
  try {
    const bande = await prisma.bande.findMany();
    res.send(bande);
  } catch (error) {
    console.log(error);
  }
};

const getBandeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const bande = await prisma.bande.findUnique({
      where: {
        id: id,
      },
    });
    res.send(bande);
  } catch (error) {
    console.log(error);
  }
};

const deleteBandeController = async (req, res) => {
  try {
    const id = req.params.id;
    const bande = await prisma.bande.delete({
      where: {
        id: id,
      },
    });
    res.send(bande);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBandeController,
  getBandeByIdController,
  deleteBandeController,
};
