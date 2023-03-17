const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

let x = 0;

app.get("/", (req, res) => {
  console.log(`Requested for temperature ${x++} times`);
  res.send("28");
})

const port = process.env.PORT || 6969;
app.listen(process.env.PORT || 6969, () => {
  console.log("Listening on port: " + port);
})

module.exports = app;
