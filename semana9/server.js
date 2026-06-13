const express = require('express');
const app = express();

// Ruta raíz (GET)
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta de estado en formato JSON (GET)
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

// El servidor se queda escuchando de forma continua en el puerto lógico 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});