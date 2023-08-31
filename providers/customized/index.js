'use strict';

const { log } = console;

const nodemailer = require('nodemailer');
const { standarize } = require('./utils');
const send = async (emailData, smtpData) => {
  log(
    'info@providers/customizes/index:sendEmailCustom',
    'The selected provider is Customized'
  );
  const standarizedEmailData = standarize(emailData);
  const transporter = nodemailer.createTransport({
    host: smtpData.host,
    secure: !smtpData.useStarttls,
    opportunisticTLS: true,
    connectionTimeout: 20000,
    auth: {
      user: smtpData.user,
      pass: smtpData.pass,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  log('Sending email...');
  const info = await transporter.sendMail(standarizedEmailData).catch((err) => {
    throw new Error(err);
  });
  log('Info: ', info.response);
  return null;
};

exports.send = send;
