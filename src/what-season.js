const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  try {
    const month = date.toDateString().substr(4, 3);
    if (month === 'Jan' || month === 'Feb' || month === 'Dec') return 'winter'
    if (month === 'Mar' || month === 'Apr' || month === 'May') return 'spring'
    if (month === 'Jun' || month === 'Jul' || month === 'Aug') return 'summer'
    if (month === 'Sep' || month === 'Oct' || month === 'Nov') return 'autumn'
  } catch {
    throw Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
