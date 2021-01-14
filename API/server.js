const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://localhost:3001'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to CES API." });
});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
})