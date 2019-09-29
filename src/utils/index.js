import {cloneObject} from './cloneObject';
import {eventbus} from './event';

const isInArray = (arr, value) => {
  if (arr === null || arr === undefined)
    return false;
  if (arr.indexOf && typeof (arr.indexOf) == 'function') {
    var index = arr.indexOf(value);
    if (index >= 0)
      return true;
  }
  return false;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

const formatTime = timestamp => {
  var date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

const subStrByDigits = (str, digits) => {
  var strNew = str;
  if (strNew.length > digits) {
    strNew = strNew.substring(0, digits) + '...';
  }
  return strNew;
};

const hasChinese = str => {
  var reg = new RegExp('[\u4E00-\u9FFF]+', 'g');

  return reg.test(str);
};

const splitList = (arr, len) => {
  let a_len = arr.length, result = [];
  for (var i = 0; i < a_len; i += len)
    result.push(arr.slice(i, i + len));

  return result.length > 0 ? result : [[]];
};

const removeListItem = (arr, val) => {
  var index = arr.indexOf(val);
  if (index > -1)
    arr.splice(index, 1);
};

const unique = data => {
  let temp = [];
  data.forEach(d => {
    if (temp.indexOf(d) === -1)
      temp.push(d);
  });
  return temp;
};

const gcd = (a, b) => {
  if (b == 0) {
    return a;
  }
  let r = a % b;
  return gcd(b, r);
};

const isJSON = str => {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }

    } catch (e) {
      console.log('error：' + str + '!!!' + e);
      return false;
    }
  }
  console.log('It is not a string!')
};

export const validatorFloat = (rule, value, callback) => {
  if (value === 0)
    callback();
  if (value) {
    if ((/^\d+(\.{0,1}\d+){0,1}$/).test(value) === false) {
      callback(new Error('请填写非负的数字'));
    } else {
      callback();
    }
  } else {
    callback();
  }
};

const validatorNum = (rule, value, callback) => {
  if (value === 0)
    callback();
  if (value) {
    if ((/^[1-9]\d*$/).test(value) === false) {
      callback(new Error('请填写非负整数'));
    } else {
      callback();
    }
  } else {
    callback();
  }
};

export {
  isInArray,
  cloneObject,
  eventbus,
  validatorNum,
  splitList,
  unique,
  isJSON,
  removeListItem,
  gcd,
  subStrByDigits,
  formatTime
};
