const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let array = [];
  let additionArray =[];
  let additionResult = '';
  let res = str;
    if ('addition' in options) { 
      options.addition = String(options.addition) 
    };
    if (options.repeatTimes == undefined) { 
      options.repeatTimes = 1 
    };
    if (options.additionRepeatTimes == undefined) { 
      options.additionRepeatTimes = 1
    };
    if (options.repeatTimes) {
      for(let i = 0; i < options.repeatTimes; i++) {
        if (options.addition) {
          for(let x = 0; x < options.additionRepeatTimes; x++) {
            additionArray.push(options.addition);
          }
            if(options.additionSeparator) {
              additionResult = additionArray.join(`${options.additionSeparator}`);
            } else {
              additionResult = additionArray.join('|');
            }
          additionArray = [];
        }
          array.push(str + additionResult);
        }
        if (options.separator) {
          res = array.join(`${options.separator}`);
        } else {
            res = array.join('+');
        }
        array = [];
    }
    return res;
};
  