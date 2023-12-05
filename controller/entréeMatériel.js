const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEntréeMatérielController = async (req, res) => {
  try {
    const entréeMatériel = await prisma.entrerMateriel.findMany();
    res.send(entréeMatériel);
  } catch (error) {
    console.log(error);
  }
};

const getEntréeMatérielByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeMatériel = await prisma.entrerMateriel.findUnique({
      where: {
        id: id,
      },
    });
    res.send(entréeMatériel);
  } catch (error) {
    console.log(error);
  }
};

const postEntréeMatérielController = async (req, res) => {
  try {
    const { batimentId, designation, quantite, unite } = req.body;
    const entréeMatériel = await prisma.entrerMateriel.create({
      data: {
        batimentId: batimentId,
        designation: designation,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeMatériel) {
      const verify = await prisma.materiel.findUnique({
        where: {
          designation: designation,
        },
      });
      if (verify) {
        const increment = await prisma.materiel.update({
          where: {
            designation: designation,
          },
          data: {
            quantite: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
      if (!verify) {
        const add = await prisma.materiel.create({
          data: {
            batimentId: batimentId,
            designation: designation,
            quantite: parseInt(quantite),
            unite: unite,
          },
        });
        res.send(add);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchEntréeMatérielController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, designation, quantite, unite } = req.body;
    const entréeMatériel = await prisma.entrerMateriel.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        designation: designation,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeMatériel) {
      const verify = await prisma.materiel.findUnique({
        where: {
          designation: designation,
        },
      });
      if (verify) {
        const decrement = await prisma.materiel.update({
          where: {
            designation: designation,
          },
          data: {
            quantite: { decrement: parseInt(quantite) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchEntréeMatériel1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, designation, quantite, unite } = req.body;
    const entréeMatériel = await prisma.entrerMateriel.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        designation: designation,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (entréeMatériel) {
      const verify = await prisma.materiel.findUnique({
        where: {
          designation: designation,
        },
      });
      if (verify) {
        const increment = await prisma.materiel.update({
          where: {
            designation: designation,
          },
          data: {
            quantite: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteEntréeMatérielController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeMatériel = await prisma.entrerMateriel.delete({
      where: {
        id: id,
      },
    });
    res.send(entréeMatériel);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEntréeMatérielController,
  getEntréeMatérielByIdController,
  postEntréeMatérielController,
  patchEntréeMatérielController,
  patchEntréeMatériel1Controller,
  deleteEntréeMatérielController,
};
