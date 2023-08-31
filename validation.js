'use string';

const Joi = require('joi');

const itemEmail = Joi.array().items(Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required()
}))

const itemEmailOptional = Joi.array().items(Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email()
}))

exports.emailDataValidation = Joi.object().keys({
    emailData: Joi.object().keys({
        from: itemEmailOptional,
        to: itemEmail,
        cc: itemEmail,
        bcc: itemEmail,
        replyTo: itemEmail,
        subject: Joi.string().required(),
        tag: Joi.string(),
        text: Joi.string().required(),
        html: Joi.string()
    })
});
