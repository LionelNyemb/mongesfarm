const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dayjs = require("dayjs");
const { connection } = require("../config/env");

// dayjs(createdAt).format("DD/MM/YYYY h:mm");
// console.log(dayjs("2019-01-25").format("DD/MM/YYYY"));
const getBandeController = async (req, res) => {
  const createdAt = req.params.createdAt;
  try {
    const bande = await prisma.bande.groupBy({
      by: ["batimentId"],
      _count: {
        batimentId: true,
      },
    });
    res.send(bande);
    console.log(
      bande.map((item) => dayjs(item.createdAt).format("DD/MM/YYYY"))
    );
    // const x = dayjs(bande.map((item) => item.createdAt));
    // const y = dayjs(bande.map((item) => item.updatedAt));
    // const duration = dayjs.duration(x.diff(y));
    // console.log(duration);

    // res.send(dayjs(bande.createdAt).format("DD/MM/YYYY à h:mm"));
    // console.log(dayjs(x.diff(y, "month")).format("DD/MM/YYYY"));

    // console.log(bande.map((item) => item.createdAt));
  } catch (error) {
    console.log(error);
  }
};

// const getBandeByDate = (batimentId, callback) => {
//   console.log(batimentId);
//   connection.query(
//     "SELECT batimentId, FROM `bande` GROUP BY batimentId",
//     [batimentId],
//     (err, res) => {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, res);
//       }
//     }
//   );
// };

// const getBandeByDate = (_req, res) => {
//   connection.query("SELECT * FROM `bande`", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// };
const getBandeByDate = (date, res) => {
  connection.query(
    "SELECT DATE(createdAt), COUNT(*) FROM `bande` GROUP BY DATE(createdAt)",
    [date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      // console.log(result);
      // console.log(result[0]);
      // const a = JSON.parse(JSON.stringify(result));
      // console.log(a[0].createdAT);
      // console.log(result);
    }
  );
};
// const getBandeByDate = (date, res) => {
//   connection.query(
//     "SELECT * FROM `bande` GROUP BY DATE(createdAT)",
//     [date],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// };

// SELECT Date , SUM(updatedAt)
// FROM bande
// GROUP BY date

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

const getDateBandeController = async (req, res) => {
  try {
    const start = req.params.start;
    const end = req.params.end;
    const bande = await prisma.bande.findMany({
      where: {
        createdAt: {
          lte: new Date(start),
          gte: new Date(end),
        },
      },
    });
    res.send(bande);
    console.log(bande.map((x) => x.createdAt));
    console.log(start);
    console.log(end);
  } catch (error) {
    console.log(error);
  }
};
// console.log(new Date("10/10/2023"));

const getAllBandeController = async (req, res) => {
  try {
    const bande = await prisma.bande.findMany();
    res.send(bande);
    // console.log(bande.map((x) => x.createdAt));
    // const m = bande.map((x) => dayjs(x.updatedAt - x.createdAt).format("h:m"));
    // const n = dayjs(new Date("0,0,0,1,0,0")).format("h:m");
    // console.log(bande.map((x) => dayjs(x.createdAt).format("HH:mm")));
    // console.log(
    //   bande.map((x) =>
    //     dayjs(
    //       x.updatedAt - x.createdAt - new Date(2023, 10, 10, 1, 30, 0)
    //     ).format("HH:mm")
    //   )
    // );
    // console.log(new Date(2023, 16, 16, 2, 0, 0));
  } catch (error) {
    console.log(error);
  }
};

// const getBandeByDateController = async (req, res) => {
//   try {
//     const createdAt = req.params.createdAt;
//     const bande = await prisma.bande.findMany({
//       where: {
//         createdAt: createdAt,
//       },
//     });
//     res.send(bande);
//   } catch (error) {
//     console.log(error);
//   }
// };

const postBandeController = async (req, res) => {
  try {
    const { batimentId, codeBande, periode, effectifDepart, type } = req.body;
    const bande = await prisma.bande.create({
      data: {
        batimentId: batimentId,
        codeBande: codeBande,
        periode: periode,
        effectifDepart: effectifDepart,
        type: type,
      },
    });
    res.send(bande);
    // console.log(bande.type);
  } catch (error) {
    console.log(error);
  }
};

const patchBandeController = async (req, res) => {
  try {
    const data = req.body;
    const { batimentId, codeBande, periode, effectifDepart, type } = req.body;
    const bande = await prisma.bande.update({
      where: {
        id: data.id,
      },
      data: {
        batimentId: batimentId,
        codeBande: codeBande,
        periode: periode,
        effectifDepart: effectifDepart,
        type: type,
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
  getAllBandeController,
  getBandeByIdController,
  postBandeController,
  patchBandeController,
  deleteBandeController,
  // getBandeByDateController,
  getBandeByDate,
  getDateBandeController,
};
