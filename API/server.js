const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
var corsOptions = {
  origin: 'http://localhost:3001'
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());
// app.use(...);

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "Welcome to CES API." });
});

require("./routes/dept.routes")(app);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
})