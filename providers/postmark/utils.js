'use strict';

const { arrayToStr } = require('../../utils.js');

exports.standarize = (payload) => {

    const ReplyTo = '';

    if (payload.replyTo) {

        ReplyTo = typeof payload.replyTo[0] === 'string' ? payload.replyTo[0] : payload.replyTo[0].email;

    }

    const returnData = {
        To: arrayToStr(payload.to, ',', false),
        Cc: payload.cc ? arrayToStr(payload.cc, ',', false) : '',
        Bcc: payload.bcc ? arrayToStr(payload.bbc, ',', false) : '',
        Subject: payload.subject,
        Tag: payload.tag ? payload.tag : '',
        HtmlBody: payload.html ? payload.html : '',
        TextBody: payload.text ? payload.text : '',
        ReplyTo
    };

    return returnData;

};
