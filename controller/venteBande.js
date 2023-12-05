const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVenteBandeController = async (req, res) => {
  try {
    const venteBande = await prisma.venteBande.findMany();
    res.send(venteBande);
  } catch (error) {
    console.log(error);
  }
};

const getVenteBandeByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const venteBande = await prisma.venteBande.findUnique({
      where: {
        id: id,
      },
    });
    res.send(venteBande);
  } catch (error) {
    console.log(error);
  }
};

const postVenteBandeController = async (req, res) => {
  try {
    const {
      clientId,
      bandeId,
      quantite,
      unite,
      prixUnitaire,
      unite1,
      montant,
    } = req.body;
    const verify1 = await prisma.bande.findUnique({
      where: {
        type: bandeId,
      },
    });
    console.log(req.body.quantite);
    console.log(verify1.effectif);
    if (verify1.effectif >= req.body.quantite) {
      const venteBande = await prisma.venteBande.create({
        data: {
          clientId: clientId,
          bandeId: bandeId,
          quantite: parseInt(quantite),
          unite: unite,
          prixUnitaire: parseInt(prixUnitaire),
          unite1: unite1,
          montant: parseInt(montant),
        },
      });
      if (venteBande) {
        const verify = await prisma.bande.findUnique({
          where: {
            type: bandeId,
          },
        });
        if (verify) {
          const decrement = await prisma.bande.update({
            where: {
              type: bandeId,
            },
            data: {
              effectif: { decrement: parseInt(quantite) },
            },
          });
          res.send(decrement);
        }
      }
    } else {
      res.send("effectif insuffisant");
      console.log("effectif insuffisant");
    }
  } catch (error) {
    console.log(error);
  }
};

const patchVenteBandeController = async (req, res) => {
  try {
    const data = req.body;
    const {
      clientId,
      bandeId,
      quantite,
      unite,
      montant,
      unite1,
      prixUnitaire,
    } = req.body;
    const venteBande = await prisma.venteBande.update({
      where: {
        id: data.id,
      },
      data: {
        clientId: clientId,
        bandeId: bandeId,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
      },
    });
    if (venteBande) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: bandeId,
        },
      });
      if (verify) {
        const increment = await prisma.bande.update({
          where: {
            type: bandeId,
          },
          data: {
            effectif: { increment: parseInt(quantite) },
          },
        });
        res.send(increment);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const patchVenteBande1Controller = async (req, res) => {
  try {
    const data = req.body;
    const {
      clientId,
      bandeId,
      quantite,
      unite,
      montant,
      unite1,
      prixUnitaire,
    } = req.body;
    const venteBande = await prisma.venteBande.update({
      where: {
        id: data.id,
      },
      data: {
        clientId: clientId,
        bandeId: bandeId,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
      },
    });
    if (venteBande) {
      const verify = await prisma.bande.findUnique({
        where: {
          type: bandeId,
        },
      });
      if (verify) {
        const decrement = await prisma.bande.update({
          where: {
            type: bandeId,
          },
          data: {
            effectif: { decrement: parseInt(quantite) },
          },
        });
        res.send(decrement);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteVenteBandeController = async (req, res) => {
  try {
    const id = req.params.id;
    const venteBande = await prisma.venteBande.delete({
      where: {
        id: id,
      },
    });
    res.send(venteBande);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getVenteBandeController,
  getVenteBandeByIdController,
  postVenteBandeController,
  patchVenteBandeController,
  patchVenteBande1Controller,
  deleteVenteBandeController,
};
