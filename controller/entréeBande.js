const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getEntréeBandeController = async (req, res) => {
  try {
    const entréeBande = await prisma.entrerBande.findMany();
    res.send(entréeBande);
  } catch (error) {
    console.log(error);
  }
};

const getEntréeBandeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeBande = await prisma.entrerBande.findUnique({
      where: {
        id: id,
      },
    });
    res.send(entréeBande);
  } catch (error) {
    console.log(error);
  }
};

const postEntréeBandeController = async (req, res) => {
  try {
    const { batimentId, type, effectif, unite } = req.body;
    const entréeBande = await prisma.entrerBande.create({
      data: {
        batimentId: batimentId,
        type: type,
        effectif: parseInt(effectif),
        unite: unite,
      },
    });
    if (entréeBande) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: type,
        },
      });
      if (verify) {
        const increment = await prisma.bande.update({
          where: {
            type: type,
          },
          data: {
            effectif: { increment: parseInt(effectif) },
          },
        });
        res.send(increment);
      }
      if (!verify) {
        const add = await prisma.bande.create({
          data: {
            batimentId: batimentId,
            type: type,
            effectif: parseInt(effectif),
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

const patchEntréeBandeController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, type, effectif, unite } = req.body;
    const entréeBande = await prisma.entrerBande.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        type: type,
        effectif: parseInt(effectif),
        unite: unite,
      },
    });
    if (entréeBande) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: type,
        },
      });
      if (verify) {
        const decrement = await prisma.bande.update({
          where: {
            type: type,
          },
          data: {
            effectif: { decrement: parseInt(effectif) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchEntréeBande1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, type, effectif, unite } = req.body;
    const entréeBande = await prisma.entrerBande.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        type: type,
        effectif: parseInt(effectif),
        unite: unite,
      },
    });
    if (entréeBande) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: type,
        },
      });
      if (verify) {
        const increment = await prisma.bande.update({
          where: {
            type: type,
          },
          data: {
            effectif: { increment: parseInt(effectif) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteEntréeBandeController = async (req, res) => {
  try {
    const id = req.params.id;
    const entréeBande = await prisma.entrerBande.delete({
      where: {
        id: id,
      },
    });
    res.send(entréeBande);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEntréeBandeController,
  getEntréeBandeByIdController,
  postEntréeBandeController,
  patchEntréeBandeController,
  patchEntréeBande1Controller,
  deleteEntréeBandeController,
};
