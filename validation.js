'use string';

const Joi = require('joi');

exports.emailDataValidation = Joi.object().keys({
    to: Joi.array().items(Joi.string().email(), Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    })).required(),
    cc: Joi.array().items(Joi.string().email(), Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    })),
    bcc: Joi.array().items(Joi.string().email(), Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    })),
    replyTo: Joi.array().items(Joi.string().email(), Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required()
    })),
    subject: Joi.string().required(),
    tag: Joi.string(),
    text: Joi.string().required(),
    html: Joi.string()
});
