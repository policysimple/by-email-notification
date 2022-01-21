'use strict';

/**
 * Returns an string seperated for one separator symbol
 * @param {array} arrayForConvertToStr Each item van be an str or an array which contains the property email
 * @param {string} separator
 * @param {boolean} lastStrWithSeparator The separator is included on the end of the last string
 * @returns {object}
 */

const arrayToStr = (arrayForConvertToStr, separator = ',', lastStrWithSeparator = false) => {

    let resultStr = '';
    arrayForConvertToStr.forEach((item, index) => {

        const strValue = typeof item === 'string' ? item : item.email;

        if (arrayForConvertToStr.length - 1 === index && !lastStrWithSeparator) {

            resultStr += strValue;
            return;

        }

        resultStr += `${strValue}${separator}`;

    });

    return resultStr;

};

/**
 * Returns an string seperated for one separator symbol, each string has email format: mail@domain.com or Name <mail@domain.com>
 * @param {array} arrayForConvertToStr Each item van be an str or an array which contains the property email
 * @param {string} separator
 * @param {boolean} lastStrWithSeparator The separator is included on the end of the last string
 * @returns {object}
 */

const arrayToStrEmailFormat = (arrayForConvertToStr, separator = ',', lastStrWithSeparator = false) => {

    let resultStr = '';
    arrayForConvertToStr.forEach((item, index) => {

        const strValue = typeof item === 'string' ? item : `${item.name} <${item.email}>`;

        if (arrayForConvertToStr.length - 1 === index && !lastStrWithSeparator) {

            resultStr += strValue;
            return;

        }

        resultStr += `${strValue}${separator}`;

    });

    return resultStr;

};

exports.arrayToStr = arrayToStr;

exports.arrayToStrEmailFormat = arrayToStrEmailFormat;