const db = require("../models");
const Prog = db.prog;

// Create and Save a new Programme
exports.create = (req, res) => {

  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Programme
  const prog = new Prog(req.body);

  // Save Programme in the database
  prog
    .save(prog)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Programmes.",
      });
    });
};

// Retrieve all Programmes from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  console.log(condition);

    Prog.find(condition).populate("Dept", "-_id -__v")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Programmes.",
      });
    });
};

// Find a single Programme with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Prog.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Programme with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Programme with id=" + id });
    });
};

// Update a Programme by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Prog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Programme with id=${id}. Maybe Programme was not found!`,
        });
      } else res.send({ message: "Programme was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Programme with id=" + id,
      });
    });
};

// Delete a Programme with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Prog.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Programme with id=${id}. Maybe Programme was not found!`
          });
        } else {
          res.send({
            message: "Programme was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Programme with id=" + id
        });
      });    
};


