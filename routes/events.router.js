const router = require('express').Router();
const { validatorHandler } = require('../middlewares/validator.handler');
const { getEventSchema, createEventSchema, updateEventSchema } = require('../schemas/events.schema');
const service = require('../services/events.service');

router.get('/', async (req, res) => {
    const events = await service.index();
    res.json(events);
});

router.get('/:id', validatorHandler(getEventSchema, 'params'), async (req, res) => {
    const id = req.params.id;
    const event = await service.show(id);
    res.json(event);
});
//con Validaciones JOI
router.post('/', validatorHandler(createEventSchema, 'body'), async (req, res) => {
    const body = req.body;
    const event = await service.store(body);
    res.status(201).json(event);
});
//Con Validaciones JOI
router.put('/:id', validatorHandler(updateEventSchema, 'body'), async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const event = await service.update(id, body);
    res.json(event);
});

router.delete('/:id', validatorHandler(getEventSchema, 'params'), async (req, res) => {
    const id = req.params.id;
    const event = await service.destroy(id);
    res.json(event);
});

module.exports = router;
