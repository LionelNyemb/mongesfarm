const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSortieMatérielController = async (req, res) => {
  try {
    const sortieMatériel = await prisma.sortieMateriel.findMany();
    res.send(sortieMatériel);
  } catch (error) {
    console.log(error);
  }
};

const getSortieMatérielByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieMatériel = await prisma.sortieMateriel.findUnique({
      where: {
        id: id,
      },
    });
    res.send(sortieMatériel);
  } catch (error) {
    console.log(error);
  }
};

const postSortieMatérielController = async (req, res) => {
  try {
    const { ouvrierId, batimentId, designation, quantite, unite, note } =
      req.body;
    const verify1 = await prisma.materiel.findUnique({
      where: {
        designation: designation,
      },
    });
    if (verify1.quantite >= req.body.quantite) {
      const sortieMatériel = await prisma.sortieMateriel.create({
        data: {
          ouvrierId: ouvrierId,
          batimentId: batimentId,
          designation: designation,
          quantite: parseInt(quantite),
          unite: unite,
          note: note,
        },
      });
      if (sortieMatériel) {
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
        if (!verify) {
          res.send("matériel introuvable");
        }
      }
    } else {
      res.send("quantite insuffisante");
      console.log("quantite insuffisante");
    }
  } catch (error) {
    console.log(error);
  }
};

const patchSortieMatérielController = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, batimentId, designation, quantite, unite, note } =
      req.body;
    const sortieMatériel = await prisma.sortieMateriel.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        batimentId: batimentId,
        designation: designation,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    if (sortieMatériel) {
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
const patchSortieMatériel1Controller = async (req, res) => {
  try {
    const data = req.body;
    const { ouvrierId, batimentId, designation, quantite, unite, note } =
      req.body;
    const sortieMatériel = await prisma.sortieMateriel.update({
      where: {
        id: data.id,
      },
      data: {
        ouvrierId: ouvrierId,
        batimentId: batimentId,
        designation: designation,
        quantite: parseInt(quantite),
        unite: unite,
        note: note,
      },
    });
    if (sortieMatériel) {
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

const deleteSortieMatérielController = async (req, res) => {
  try {
    const id = req.params.id;
    const sortieMatériel = await prisma.sortieMateriel.delete({
      where: {
        id: id,
      },
    });
    res.send(sortieMatériel);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSortieMatérielController,
  getSortieMatérielByIdController,
  postSortieMatérielController,
  patchSortieMatérielController,
  patchSortieMatériel1Controller,
  deleteSortieMatérielController,
};
