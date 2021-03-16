const router = require('express').Router();
// eslint-disable-next-line no-unused-vars
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  const data = await Tag.findAll({
    include: {
      model: Product,
    },
  });
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const data = await Tag.findByPk(req.params.id, {
    include: {
      model: Product,
    },
  });
  res.status(200).json(data);
});

router.post('/', async (req, res) => {
  const data = await Tag.create(req.body);
  res.status(200).json(data);
});

router.put('/:id', async (req, res) => {
  const data = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(data);
});

router.delete('/:id', async (req, res) => {
  const data = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(400).json(data);
});

module.exports = router;
