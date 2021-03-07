const { validationResult } = require("express-validator");

// CREATE -> POST
exports.createTodoList = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = new Date();
  const timeCreated = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const authorID = req.body.authorID;
  const authorName = req.body.authorName;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Data yang anda masukkan tidak valid"); // Error default dari express-validator
    console.log(err.errorStatus);
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    message: "Create todo success",
    data: {
      uuid: 1,
      title: title,
      description: description,
      timeCreated: timeCreated,
      author: {
        uuid: authorID,
        fullName: authorName,
      },
    },
  };

  res.status(201).json(result);
  next();
};

// READ -> GET
exports.getAllTodoList = (req, res, next) => {
  res.status(200).json({
    message: "Get all todolist success",
    data: [
      {
        uuid: 1,
        title: "Make a coffee",
        description:
          "Before i go to work, i usually make a cappucino coffee because i like a mix coffee + milk",
        time: "06:00",
        date: "06/03/2021",
        isChecked: false,
      },
      {
        uuid: 2,
        title: "Read a book",
        description: "I must read a Elon Musk autobiograph",
        time: "13:45",
        date: "06/03/2021",
        isChecked: false,
      },
      {
        uuid: 3,
        title: "Praying",
        description: "Praying in Istiqlal",
        time: "15:30",
        date: "06/03/2021",
        isChecked: false,
      },
    ],
  });
  next();
};

// UPDATE -> PUT
// exports.updateMahasiswaData = (req, res, next) => {
//   res.json({ nama: "Bryant", usia: 21, status: "single" });
//   next();
// };

//DELETE -> DELETE
// exports.deleteMahasiswaData = (req, res, next) => {
//   res.json({ id: null, nama: "", usia: null, status: "" });
//   next();
// };
