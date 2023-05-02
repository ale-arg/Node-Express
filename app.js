var express = require('express');
var app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "EJS Engine." });
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { nosotros: "Nosotros EJS" });
});

  app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).render("404", {
      titulo: "404",
      descripcion: "Titulo del Sitio Web"
    });
  });

 

app.listen(port, function() {
  console.log(`Pueto del servidor: ${port}`);
});