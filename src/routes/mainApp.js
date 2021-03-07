const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const mainAppController = require("../controller/mainApp");

router.get("/", mainAppController.getAllTodoList);
router.post(
  "/create-todo",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("Input judul minimal memiliki 5 karakter"),
    body("description")
      .isLength({ min: 5 })
      .withMessage("Input deskripsi minimal memiliki 5 karakter"),
  ],
  mainAppController.createTodoList
);

module.exports = router;
