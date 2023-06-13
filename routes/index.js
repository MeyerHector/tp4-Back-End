const express = require('express');
const router = express.Router();

const serverFunctions = require("../controllers/server.js");

// RUTA GET
router.get('/', serverFunctions.get);

// RUTA POST
router.post('/', serverFunctions.post);

// RUTA PUT 
router.put('/', serverFunctions.put);

// RUTA DELETE
router.delete('/', serverFunctions.deletee);

module.exports = router;
