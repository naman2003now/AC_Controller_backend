const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Fuck You");
})
app.listen(process.env.PORT || 6969, () => {

})
