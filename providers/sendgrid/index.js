'use strict';

const sgMail = require('@sendgrid/mail');
const { error, log } = console;
const { standarize } = require("./utils");

const send = async(configData, emailData) => {

    log('info@providers/sendgrid/index:send', 'The selected provider is SendGrid');

    const {
        SENDGRID_API_KEY,
        SENDGRID_EMAIL_FROM
    } = configData;

    const standarizedEmailData = standarize(emailData);

    sgMail.setApiKey(SENDGRID_API_KEY);

    const resultSendEmail = await sgMail.send({
        from: SENDGRID_EMAIL_FROM,
        ...standarizedEmailData
    });

    return resultSendEmail;

};

exports.send = send;