module.exports = app => {
    const dept = require('../controllers/dept.controller');
  
    var router = require('express').Router();
  
    // Create a new Tutorial
    router.post("/", dept.create);
  
    // Retrieve all dept
    router.get("/", dept.findAll);
    
    // Retrieve a single Tutorial with id
    router.get("/:id", dept.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", dept.update);
  
    app.use('/api/dept', router);
  };