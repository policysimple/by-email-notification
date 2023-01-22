'use strict';

const { arrayToStr } = require('../../utils.js');

exports.standarize = (payload) => {

    const {
        to,
        cc,
        bbc,
        subject,
        replyPro,
        html,
        text
    } = payload;

    const returnData = {
        to,
        cc,
        bbc,
        subject,
        replyPro,
        html,
        text
    };

    return returnData;

};
