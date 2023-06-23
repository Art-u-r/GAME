const express = require('express');

const { Theme, Qwiz } = require('../db/models');

const apiQwizRouter = express.Router();

apiQwizRouter.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
  const data = await Qwiz.findOne({ where: { id } });
  if (data.answer === answer) {
    res.json(data.count);
  } else {
    res.json(0);
  }
});

module.exports = apiQwizRouter;
