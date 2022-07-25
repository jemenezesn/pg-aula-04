const express = require('express');

const router = express.Router();
let products = require('./products');

router.get('/', (req, res) => {
  return res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product.id === Number(id));
  
  if(!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
});



module.exports = router;