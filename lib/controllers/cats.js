const { Router } = require('express');
const { cats } = require('../../data/cats');

// module.exports = Router();
module.exports = Router()


  .get('/', (req, res) => {
    // console.log('cats', cats);
    const cats_list = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cats_list);
  });
