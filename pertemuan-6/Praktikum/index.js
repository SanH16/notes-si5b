// menggunakan express
const express = require("express");
const app = express();

// Routes ke halaman utama
app.get("/", function (req, res) {
  res.send("Hello San");
});

app.get("/profile/:nama", function (req, res) {
  res.send("Hello my name is " + req.params.nama);
});

// app.get("/ab?cd", (req, res) => {
//   res.send("ab?cd");
// });

app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

app.get("/datamhs", (req, res) => {
  let listMhs = [
    { nama: "Adhitya", npm: "2024240088" },
    { nama: "Hasan", npm: "2024240099" },
    { nama: "Michael", npm: "2024240077P" },
  ];
  res.json(listMhs);
});

app.listen(3000);
