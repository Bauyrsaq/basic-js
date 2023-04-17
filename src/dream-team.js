const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let nameOfTeam = [];
  for (let member in members) {
    if (typeof(members[member]) !== 'string') continue;
    nameOfTeam.push(members[member].trim()[0].toUpperCase());
  }
  // let count = 1;
  // for (let i = count; i < nameOfTeam.length; i++) {
  //   for (let char in nameOfTeam) {
  //     let next = Number(char) + 1;
  //     if (next === nameOfTeam.length) next = char;
  //     if (nameOfTeam[char].charCodeAt() > nameOfTeam[next].charCodeAt()) {
  //       const firstChar = nameOfTeam[char];
  //       const secondChar = nameOfTeam[next];
  //       nameOfTeam.splice(char, 1, secondChar);
  //       nameOfTeam.splice(next, 1, firstChar);
  //     }
  //   }
  //   count++;
  // }
  nameOfTeam.sort();
  let sortedName = ''
  for (let char in nameOfTeam) {
    sortedName += nameOfTeam[char];
  }
  return sortedName;
}

module.exports = {
  createDreamTeam
};
