const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let member = [];
  if(members === null || members === undefined || !Array.isArray(members)) return false;
  for (i in members) {
    if (typeof members[i] == 'string') {
      member.push(members[i].trim().slice(0, 1).toUpperCase());
    }
  }
  return member.sort().join('');
}
