const hedgehogRouter = require('express').Router();
const { Hedghehog } = require('../../db/models');

hedgehogRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const hedgehogs = await Hedghehog.findAll();
      res.status(200).json(hedgehogs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка получения ежей' });
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body.name || !req.body.github) {
        return res.status(400).json({ message: 'Заполните все поля' });
      }
      const hedgehog = await Hedghehog.create(req.body);
      res.status(201).json(hedgehog);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка создания ежа' });
    }
  });

hedgehogRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAmount = await Hedghehog.destroy({ where: { id } });
      if (!deletedAmount) return res.status(404).json({ message: 'Еж не найден' });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message, text: 'Ошибка удаления ежа' });
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, github } = req.body;
      await Hedghehog.update({ name, github }, { where: { id } });
      const hedgehog = await Hedghehog.findOne({ where: { id } });
      if (!hedgehog) return res.status(404).json({ message: 'Еж не найден' });
      res.status(200).json(hedgehog);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
        text: 'Ошибка обновления имени или гитхаба ежа',
      });
    }
  })
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const hedgehog = await Hedghehog.findOne({ where: { id } });
      if (!hedgehog) return res.status(404).json({ message: 'Еж не найден' });
      res.status(200).json(hedgehog);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: error.message, text: 'Ошибка получения ежа по id' });
    }
  });

hedgehogRouter.patch('/:id/bonus', async (req, res) => {
  try {
    const { id } = req.params;
    const hedgehog = await Hedghehog.findOne({ where: { id } });
    if (!hedgehog) return res.status(404).json({ message: 'Еж не найден' });
    hedgehog.bonus++;
    await hedgehog.save();
    res.status(200).json(hedgehog);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: error.message, text: 'Ошибка добавления бонусных баллов ежу' });
  }
});

module.exports = hedgehogRouter;
