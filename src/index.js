const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Fuck You");
})

app.post("/", (req, res) => {
  res.send("Fuck You");
})

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, () => {
  console.log("Listening on port: " + port);
})

module.exports = app;
