const Joi = require('joi');

const id = Joi.number();

const nombrePais = Joi.string().min(5).max(255).required().label('Nombre del País');
const CapitalPais = Joi.string().min(5).max(255).required().label('Capital del País');
const Poblacion = Joi.number().integer().min(0).required().label('Población');
const Presidente = Joi.string().min(5).max(100).required().label('Presidente');
const Moneda = Joi.string().min(5).max(255).required().label('Moneda');

const createEventSchema = Joi.object({
    nombrePais,
    CapitalPais,
    Poblacion,
    Presidente,
    Moneda,
}).label('Crear Evento');

const updateEventSchema = Joi.object({
    nombrePais,
    CapitalPais,
    Poblacion,
    Presidente,
    Moneda,
}).label('Actualizar Evento');

const getEventSchema = Joi.object({
    id: id.required(),
}).label('Obtener Evento');

module.exports = {
    createEventSchema,
    updateEventSchema,
    getEventSchema,
};
