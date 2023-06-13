const express = require('express');
const router = express.Router();

const serverFunctions = require("../controllers/server.js");

// RUTA GET
router.get('/', serverFunctions.get); // Defino la ruta GET y utilizo mi función 'get'

// RUTA POST
router.post('/', serverFunctions.post); // Defino la ruta POST y utilizo mi función 'post'

// RUTA PUT 
router.put('/', serverFunctions.put); // Defino la ruta PUT y utilizo mi función 'put'

// RUTA DELETE
router.delete('/', serverFunctions.deletee); // Defino la ruta DELETE y utilizo mi función 'deletee'

module.exports = router; // Exporto el enrutador
