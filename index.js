const express = require("express");
const app = express();

app.use(() => {
  console.log("Tes satu");
  console.log("Tes dua");
  console.log("Tes tiga");
});

app.listen(4000);
