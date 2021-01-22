module.exports = app => {
    const prog = require('../controllers/prog.controller');
  
    var router = require('express').Router();
  
    // Create a new Tutorial
    router.post("/", prog.create);
  
    // Retrieve all prog
    router.get("/", prog.findAll);
    
    // Retrieve a single Tutorial with id
    router.get("/:id", prog.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", prog.update);
  
    app.use('/prog', router);
  };