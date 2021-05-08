import http from "http";
import fs from "fs";
const PORT = 8000;

const webPage = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //esta forma no funcionaría!
  // res.write("index.html");
  //hay que hacerlo con fs:
  if (req.url == "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("not found");
      } else {
        res.write(data);
      }
      res.end();
    });
    //peudo hacer este proceso tantas veces como sea necesario!!
  } else if (req.url == "/products") {
    fs.readFile("./products.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
};

http.createServer(webPage).listen(PORT);

//actividad: vamos a bajar algunas imagenes con el ejercicio 1, y luego mostrarlas en los html!