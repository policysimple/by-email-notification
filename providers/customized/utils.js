'use strict';

const { arrayToStrEmailFormat } = require('../../utils.js');

exports.standarize = (payload) => {
  const returnData = {
    from: arrayToStrEmailFormat(payload.from, ',', false),
    to: arrayToStrEmailFormat(payload.to, ',', false),
    subject: payload.subject,
    html: payload.html ? payload.html : '',
    text: payload.text ? payload.text : '',
  };

  if (payload.cc) {
    returnData.cc = arrayToStrEmailFormat(payload.cc, ',', false);
  }

  if (payload.bbc) {
    returnData.bcc = arrayToStrEmailFormat(payload.bbc, ',', false);
  }

  if (payload.replyTo) {
    returnData.replyTo = arrayToStrEmailFormat(payload.replyTo, ',', false);
  }

  return returnData;
};
