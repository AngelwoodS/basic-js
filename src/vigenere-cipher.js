const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct){
    this.direct = direct;
}
  encrypt(message, key) {
    if(!message || !key){ throw new Error};
        let regExp = /[A-Z]/;
        let elem = this.direct == false ? message.toUpperCase().split('').reverse().join('').split(" ").join('') : message.toUpperCase().split(' ').join('');
        let arrayForKey = key.toUpperCase().split('');
        let arrayKey = [];
        for (let c = 0; c < elem.length; c++){
          let numb;
            let res;
            let letters = elem[c].charCodeAt(0)
            
            if (arrayForKey[c] && regExp.test(elem[c])) {
                numb = arrayForKey[c].charCodeAt(0) - 65;
                res = numb + letters < 91 ? numb + letters : numb + letters - 26;
                arrayKey.push(String.fromCharCode(res));
            } else if (regExp.test(elem[c])){
                numb = arrayForKey[c % arrayForKey.length].charCodeAt(0) - 65;
                res = numb + letters < 91 ? numb + letters : numb + letters - 26;
                arrayKey.push(String.fromCharCode(res));
            } else {
                arrayKey.push(elem[c]);
            }
        };
        let toSplit = arrayKey.join('');
            let p = 0;
            let res = [];
        if(this.direct  == false){
            message.split('').reverse().join('').split(' ').forEach(word => {
                res.push(toSplit.substr(p, word.length ));
                p += word.length;
            })
        } else {
            message.split(' ').forEach(word => {
                res.push(toSplit.substr(p, word.length ));
                p += word.length;
            })
        }
        return res.join(' ');
  }    
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){ throw new Error};
        let regExp = /[A-Z]/;
        let elem = this.direct == false ? encryptedMessage.toUpperCase().split('').reverse().join('').split(" ").join('') : encryptedMessage.toUpperCase().split(' ').join('');
        let arrayForKey = key.toUpperCase().split('');
        let arrayKey = [];
        for (let c = 0; c < elem.length; c++){
            let letters = elem[c].charCodeAt(0)
            let numb;
            let res;
            if (arrayForKey[c] && regExp.test(elem[c])){
                numb = arrayForKey[c].charCodeAt(0) - 65;
                res = letters - numb > 64 ? letters - numb : letters - numb + 26;
                arrayKey.push(String.fromCharCode(res));
            } else if (regExp.test(elem[c])){
                numb = arrayForKey[c % arrayForKey.length].charCodeAt(0) - 65;
                res = letters - numb > 64 ? letters - numb : letters - numb + 26;
                arrayKey.push(String.fromCharCode(res));
            } else {
                arrayKey.push(elem[c]);
            }
        };
        let toSplit = arrayKey.join('');
            let p = 0;
            let res = [];
        if(this.direct  == false){
            encryptedMessage.split('').reverse().join('').split(' ').forEach(word => {
                res.push(toSplit.substr(p, word.length ));
                p += word.length;
            })
        } else {
            encryptedMessage.split(' ').forEach(word => {
                res.push(toSplit.substr(p, word.length ));
                p += word.length;
            })
        }
        return res.join(' ');
    }
}

module.exports = VigenereCipheringMachine;
