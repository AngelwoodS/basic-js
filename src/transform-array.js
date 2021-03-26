const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error;
    const result = [];
    for(let item = 0; item < arr.length; item++){
        switch(arr[item]){
            case '--double-next':
                if(item < arr.length-1) result.push(arr[item + 1]);
                break;
            case '--double-prev':
                if(item>0) result.push(arr[item - 1]);
                break;
            case '--discard-next':
                if(item < arr.length-1) item=item+2;
                break;
            case '--discard-prev':
                if(arr.length > 0) result.pop();
                break;
            default:
                result.push(arr[item])
        }
    }
    return result;
};
