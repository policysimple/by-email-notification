'use strict';

const postmark = require('postmark');
const { error, log } = console;
const { standarize } = require("./utils");

const send = async (configData, emailData) => {

    log('info@providers/postmark/index:send', 'The selected provider is PostMark');

    const {
        POSTMARK_CLIENT_API_KEY,
        POSTMARK_EMAIL_FROM
    } = configData;

    const standarizedEmailData = standarize(emailData);
    const client = new postmark.Client(POSTMARK_CLIENT_API_KEY);

    const resultSendEmail = await client.sendEmail({
        From: POSTMARK_EMAIL_FROM,
        ...standarizedEmailData
    });

    return resultSendEmail;

};

exports.send = send;
