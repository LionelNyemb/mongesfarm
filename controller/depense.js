const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDépenseController = async (req, res) => {
  try {
    const dépense = await prisma.depense.findMany();
    res.send(dépense);
  } catch (error) {
    console.log(error);
  }
};

const getDépenseByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const dépense = await prisma.depense.findUnique({
      where: {
        id: id,
      },
    });
    res.send(dépense);
  } catch (error) {
    console.log(error);
  }
};

const postDépenseController = async (req, res) => {
  try {
    const {
      referent,
      categorie,
      quantite,
      unite,
      prixUnitaire,
      unite1,
      montant,
      description,
    } = req.body;
    const dépense = await prisma.depense.create({
      data: {
        referent: referent,
        categorie: categorie,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
        description: description,
      },
    });
    res.send(dépense);
    res.send;
  } catch (error) {
    console.log(error);
  }
};

const patchDépenseController = async (req, res) => {
  try {
    const data = req.body;
    const {
      referent,
      categorie,
      quantite,
      unite,
      prixUnitaire,
      unite1,
      montant,
      description,
    } = req.body;
    const dépense = await prisma.depense.update({
      where: {
        id: data.id,
      },
      data: {
        referent: referent,
        categorie: categorie,
        quantite: parseInt(quantite),
        unite: unite,
        prixUnitaire: parseInt(prixUnitaire),
        unite1: unite1,
        montant: parseInt(montant),
        description: description,
      },
    });
    res.send(dépense);
  } catch (error) {
    console.log(error);
  }
};

const deleteDépenseController = async (req, res) => {
  try {
    const id = req.params.id;
    const dépense = await prisma.depense.delete({
      where: {
        id: id,
      },
    });
    res.send(dépense);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDépenseController,
  getDépenseByIdController,
  postDépenseController,
  patchDépenseController,
  deleteDépenseController,
};
