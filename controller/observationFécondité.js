const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getObservationFéconditéController = async (req, res) => {
  try {
    const observationFécondité = await prisma.observationFecondite.findMany();
    res.send(observationFécondité);
  } catch (error) {
    console.log(error);
  }
};

const getObservationFéconditéByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const observationFécondité = await prisma.observationFecondite.findUnique({
      where: {
        id: id,
      },
    });
    res.send(observationFécondité);
  } catch (error) {
    console.log(error);
  }
};

const postObservationFéconditéController = async (req, res) => {
  try {
    const { batimentId, remarque, quantite, unite } = req.body;
    const observationFécondité = await prisma.observationFecondite.create({
      data: {
        batimentId: batimentId,
        remarque: remarque,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (observationFécondité) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: remarque,
        },
      });
      if (verify) {
        const increment = await prisma.ponte.update({
          where: {
            oeuf: remarque,
          },
          data: {
            quantite: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
      if (!verify) {
        const add = await prisma.ponte.create({
          data: {
            batimentId: batimentId,
            oeuf: remarque,
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

const patchObservationFéconditéController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, remarque, quantite, unite } = req.body;
    const observationFécondité = await prisma.observationFecondite.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        remarque: remarque,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (observationFécondité) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: remarque,
        },
      });
      if (verify) {
        const decrement = await prisma.ponte.update({
          where: {
            oeuf: remarque,
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

const patchObservationFécondité1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, remarque, quantite, unite } = req.body;
    const observationFécondité = await prisma.observationFecondite.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        remarque: remarque,
        quantite: parseInt(quantite),
        unite: unite,
      },
    });
    if (observationFécondité) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: remarque,
        },
      });
      if (verify) {
        const increment = await prisma.ponte.update({
          where: {
            oeuf: remarque,
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

const deleteObservationFéconditéController = async (req, res) => {
  try {
    const id = req.params.id;
    const observationFécondité = await prisma.observationFecondite.delete({
      where: {
        id: id,
      },
    });
    res.send(observationFécondité);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getObservationFéconditéController,
  getObservationFéconditéByIdController,
  postObservationFéconditéController,
  patchObservationFéconditéController,
  patchObservationFécondité1Controller,
  deleteObservationFéconditéController,
};
