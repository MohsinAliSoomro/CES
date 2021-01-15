const db = require("../models");
const Dept = db.dept;

// Create and Save a new Department
exports.create = (req, res) => {

  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Department
  const dept = new Dept(req.body);

  // Save Department in the database
  dept
    .save(dept)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Departments.",
      });
    });
};

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

    Dept.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Departments.",
      });
    });
};

// Find a single Department with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dept.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Department with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Department with id=" + id });
    });
};

// Update a Department by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Dept.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Department with id=${id}. Maybe Department was not found!`,
        });
      } else res.send({ message: "Department was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Department with id=" + id,
      });
    });
};

// Delete a Department with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Dept.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Department with id=${id}. Maybe Department was not found!`
          });
        } else {
          res.send({
            message: "Department was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Department with id=" + id
        });
      });    
};


