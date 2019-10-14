/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

hours = (hours + Math.floor((minutes + interval) / 60)) % 24;
minutes = Math.floor(minutes + interval) % 60;

if (hours < 10)  {
	hours = '0' + hours;
	}

if (minutes < 10 ) {
	minutes =  '0' + minutes;
}
return (hours + ':' + minutes)
};
