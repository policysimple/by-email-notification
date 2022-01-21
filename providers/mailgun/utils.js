'use strict';

const { arrayToStrEmailFormat } = require('../../utils.js');

exports.standarize = (payload) => {

    const returnData = {
        to: arrayToStrEmailFormat(payload.to, ',', false),
        subject: payload.subject,
        'o:tag': payload.tag ? payload.tag : '',
        html: payload.html ? payload.html : '',
        text: payload.text ? payload.text : ''
    };

    if (payload.cc) {

        returnData.cc = arrayToStrEmailFormat(payload.cc, ',', false);

    }

    if (payload.bcc) {

        returnData.bcc = arrayToStrEmailFormat(payload.bcc, ',', false);

    }

    return returnData;

};
