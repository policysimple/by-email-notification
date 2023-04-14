'use strict';

const { error, log } = console;
const { standarize } = require("./utils");

const send = async (configData, emailData) => {

    log('info@providers/mailgun/index:send', 'The selected provider is MailGun');

    const {
        MAILGUN_API_KEY,
        MAILGUN_DOMAIN,
        MAILGUN_EMAIL_FROM
    } = configData;

    const mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN});
    const standarizedEmailData = standarize(emailData);

    const resultSendEmail = await mailgun.messages().send({
        from: MAILGUN_EMAIL_FROM,
        ...standarizedEmailData
    });

    return resultSendEmail;

};

exports.send = send;
