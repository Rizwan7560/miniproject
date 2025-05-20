const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html')); // Changed path
});

router.get('/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const validCategories = ['automotive', 'food', 'people'];
  
  if (validCategories.includes(category)) {
    res.sendFile(path.join(__dirname, `../${category.charAt(0).toUpperCase() + category.slice(1)}.html`));
  } else {
    res.status(404).send('Page not found');
  }
});

module.exports = router;