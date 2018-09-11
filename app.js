const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const knex = require("./db/client");


const dataRouter = require("./routes/data");


const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));

const staticAssetsPath = path.join(__dirname, "public");
app.use(express.static(staticAssetsPath));

app.use(express.urlencoded({ extended: true }));



app.use("/", dataRouter)

const PORT = 4545;
const DOMAIN = "localhost"; // 127.0.0.1
app.listen(PORT, DOMAIN, () => {

  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});




