# Pertemuan 6 | 27-09-2023 | Lanjutan - Introduction Fullstack

- Fullstack adalah role developer yang handle dari sisi Front-end atau client-side rendering (CSR) hingga sisi Back-end atau server-side rendering (SSR).

### 3 Stack JavaScript Fullstack

- Stack MEAN : MongoDB Express Angular NodeJS
- Stack MERN : MongoDB Express React NodeJS
- Stack MEVN : MongoDB Express Vue NodeJS

npm : Node package manager
npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.

### Server side

- NodeJS

### Database No SQL

- MongoDB

### DevOps | opsional

- AWS : Amazon Web Service
- CI/CD : Continues Integration / Continues Delivery

### Bahasa back-end

- Rust
- Go
- Java
- C#
- Ruby
- PHP

# Install Runtime Environtment Node JS

## Express JS : Express adalah framework NodeJS

### Memastikan apakah NodeJS sudah terinstall

syntax CLI :

- node -v

# Membuat project dengan Native Nodejs dan Express JS

- jalankan npm init
- isi field yang sesuai dari nama, enter hingga selesai

- buat file index.js, pergi ke About dari NodeJS kemudian copy script nya
  const http = require("http"); digunakan untuk import module http

## Create with express

- npm install express | digunakan untuk menambahkan dependencies express js
- npm remove namadependencie | digunakan untuk menghapus dependencies
  contoh hapus : npm remove mysql
- dependencies/package yang diinstal diletakkan di dalam node_modules

### Method Route Express

- GET
- POST
- PATH
  ....

### Menggunakan params pada route express

app.get("/profile/:nama", function (req, res) {
res.send("Hello my name is " + req.params.nama);
});

- JSON : JavaScript Object Notation
  <!-- contoh restfull API -->
  app.get("/datamhs", (req, res) => {
  let listMhs = [
  { nama: "Adhitya", npm: "2024240088" },
  { nama: "Hasan", npm: "2024240099" },
  { nama: "Michael", npm: "2024240077P" },
  ];
  res.json(listMhs);
  });

<!-- Install Nodemon -->

npm install -g nodemon | install di CMD jangan di powershell
