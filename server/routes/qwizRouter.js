const express = require('express');

const { Theme, Qwiz } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const qwizs = await Theme.findAll({
    include: [Qwiz],
  });
  res.json(qwizs);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const qwiz = await Theme.findOne({ where: { id }, include: [Qwiz] });
  res.json(qwiz);
});

// router.post('/', async (req, res) => {
//   const { title } = req.body;
//   const todo = await Todo.create({ title, status: false });
//   res.json(todo);
// });

// router.patch('/:id', async (req, res) => {
//   const todo = await Todo.findByPk(req.params.id);
//   await todo.update(req.body);
//   res.json(todo);
// });

// router.delete('/:id', async (req, res) => {
//   await Todo.destroy({ where: { id: req.params.id } });
//   res.sendStatus(200);
// });

module.exports = router;
