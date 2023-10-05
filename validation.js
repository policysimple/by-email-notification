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

exports.smtpDataValidation = Joi.object().keys({
    smtpData: Joi.object().keys({
        user: Joi.string().required(),
        pass: Joi.string().required(),
        host: Joi.string().required(),
        port: Joi.number().required(),
        useStarttls: Joi.boolean().required(),
    })
})