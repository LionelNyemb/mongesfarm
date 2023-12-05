const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVentePonteController = async (req, res) => {
  try {
    const ventePonte = await prisma.ventePonte.findMany();
    res.send(ventePonte);
  } catch (error) {
    console.log(error);
  }
};

const getVentePonteByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const ventePonte = await prisma.ventePonte.findUnique({
      where: {
        id: id,
      },
    });
    res.send(ventePonte);
  } catch (error) {
    console.log(error);
  }
};

const postVentePonteController = async (req, res) => {
  try {
    const {
      clientId,
      categorie,
      quantite,
      unite,
      prixUnitaire,
      unite1,
      montant,
    } = req.body;
    const ventePonte = await prisma.ventePonte.create({
      data: {
        clientId: clientId,
        categorie: categorie,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
      },
    });
    if (ventePonte) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: categorie,
        },
      });
      if (verify) {
        const decrement = await prisma.ponte.update({
          where: {
            oeuf: categorie,
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

const patchVentePonteController = async (req, res) => {
  try {
    const data = req.body;
    const {
      clientId,
      categorie,
      quantite,
      unite,
      prixUnitaire,
      unite1,
      montant,
    } = req.body;
    const ventePonte = await prisma.ventePonte.update({
      where: {
        id: data.id,
      },
      data: {
        clientId: clientId,
        categorie: categorie,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
      },
    });
    if (ventePonte) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: categorie,
        },
      });
      if (verify) {
        const increment = await prisma.ponte.update({
          where: {
            oeuf: categorie,
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

const patchVentePonte1Controller = async (req, res) => {
  try {
    const data = req.body;
    const {
      clientId,
      categorie,
      quantite,
      unite,
      montant,
      unite1,
      prixUnitaire,
    } = req.body;
    const ventePonte = await prisma.ventePonte.update({
      where: {
        id: data.id,
      },
      data: {
        clientId: clientId,
        categorie: categorie,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
      },
    });
    if (ventePonte) {
      const verify = await prisma.ponte.findUnique({
        where: {
          oeuf: categorie,
        },
      });
      if (verify) {
        const decrement = await prisma.ponte.update({
          where: {
            oeuf: categorie,
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

const deleteVentePonteController = async (req, res) => {
  try {
    const id = req.params.id;
    const ventePonte = await prisma.ventePonte.delete({
      where: {
        id: id,
      },
    });
    res.send(ventePonte);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVentePonteController,
  getVentePonteByIdController,
  postVentePonteController,
  patchVentePonteController,
  patchVentePonte1Controller,
  deleteVentePonteController,
};
